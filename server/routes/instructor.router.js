const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
// GET all instructors without authentication
// JOIN user, userTags, and tags tables and use array-agg to
// get array of object for tag name
router.get("/", (req, res) => {
  console.log("/user GET route");
  const queryText = `SELECT "user".id, "user".name, "user"."adminLevel", "user".avatar, array_agg(tags."tagName") AS tags
	                    FROM "user"
	                    JOIN "userTags"
	                    ON "userTags"."userId" = "user".id
	                    JOIN tags
	                    ON "userTags"."tagId" = tags.id
	                    WHERE "user"."adminLevel" = 'instructor'
	                    GROUP BY "user".id;`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("GET /user error", err);
      res.sendStatus(500);
    });
});

// Get individual instructor
router.get("/profile/:id", (req, res) => {
  const profileQuery = `
        SELECT * FROM "user"
        WHERE "user".id = $1;`;

  pool
    .query(profileQuery, [req.params.id])
    .then((dbRes) => {
      res.send(dbRes.rows[0]);
      // Delete password column
      delete dbRes.rows[0].password
    })
    .catch((err) => {
      console.error(`Profile error: ${err}`);
    });
});

// GET individual class
router.get("/class/:id", (req, res) => {
  const userId = req.params.id;

  const classQuery = `
    SELECT "user".id, "availableClass"."dateOfWeek", "availableClass"."startTime", "availableClass".location, "activities".activity  
    FROM "availableClass"
    JOIN "user" ON "user".id = "availableClass"."instructorId"
    JOIN "activities" on "activities".id = "availableClass"."activityId"
    WHERE "user".id = $1;
    `;
  pool
    .query(classQuery, [userId])
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error(`class error: ${err}`);
    });
});

// POST route to add classes
// router.post('/class/:id', (req, res) => {

//   const values =
//     console.log("Values is", values);
//   const sqlText = ``;

//   pool.query(sqlText, values)
//     .then((result) => {
//       console.log('POST add class successful');
//       res.sendStatus(201)
//     })
//     .catch((err) => {
//       console.log('POST add class failed', err);
//       res.sendStatus(500)
//     })
// })

// GET route to individual user tags
router.get("/tags/:id", (req, res) => {
  console.log(req.params.id);
  const tagsQuery = `
    SELECT "userTags".id, "tags"."tagName" FROM "userTags"
    JOIN "tags" on "tags".id = "userTags"."tagId"
    WHERE "userTags"."userId" = $1;
  `;
  pool
    .query(tagsQuery, [req.params.id])
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((error) => {
      console.error(error);
    });
});

router.post("/addTag/:id", rejectUnauthenticated, (req, res) => {
  console.log("tag id", req.params.id);
  console.log();

  const insertTagQuery = `
    INSERT INTO "userTags" ("userId", "tagId")
    VALUES ($1,$2)
    RETURNING "userTags"."userId";
   `;

  pool
    .query(insertTagQuery, [req.user.id, req.params.id])
    .then((dbRes) => {
      res.send(dbRes.rows[0]);
    })
    .catch((error) => {
      console.error(`${error}`);
    });
});

router.delete("/tag/:id", (req, res) => {
  const deleteTagQuery = `
    DELETE FROM "userTags"
    WHERE "userTags".id = $1;
  `;
  pool
    .query(deleteTagQuery, [req.params.id])
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(`${err}`);
      res.sendStatus(500);
    });
});

// POST route to add favorite instructors to favoriteInstructors db
router.post("/favorite/:id", rejectUnauthenticated, (req, res) => {
  console.log(req.params.id, "This is user id", req.user.id);

  const addToFavoriteQuery = `
    INSERT INTO "favoriteInstuctor" ("userId" , "instructorId")
    VALUES ($1,$2)
  `;

  pool
    .query(addToFavoriteQuery, [req.user.id, req.params.id])
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
    });
});

// Recommended instructor route
router.get("/recommend", (req, res) => {
  const userId = req.user.id;
  console.log(userId);

  const tagQuery = `
        SELECT JSON_AGG("tags"."tagName") AS "tags" FROM "userTags"
        JOIN "tags" on "tags".id = "userTags"."tagId" 
        WHERE "userTags"."userId" = $1;
    `;

  pool
    .query(tagQuery, [userId])
    .then((dbRes) => {
      console.log(dbRes.rows[0].tags, dbRes.rows[0].tags.length);
      let listOfTags = "";

      for (let index = 0; index < dbRes.rows[0].tags.length; index++) {
        console.log("last");
        if (index === dbRes.rows[0].tags.length - 1) {
          listOfTags += `\'${dbRes.rows[0].tags[index]}\'`;
        } else {
          console.log("loop", index);
          listOfTags += `\'${dbRes.rows[0].tags[index]}\',`;
        }
      }
      return listOfTags;
    })
    .then((listOfTags) => {
      console.log(listOfTags);
      const recommendInstructorQuery = `
            SELECT "user".id, "user".name, "user".pronouns , JSON_AGG("tags"."tagName"), COUNT("user".name),"user".avatar FROM "user"
            JOIN "userTags" on "user".id = "userTags"."userId"
            JOIN "tags" on "tags".id = "userTags"."tagId"
            WHERE "user"."adminLevel" = 'instructor' AND "tags"."tagName" IN (${listOfTags})
            GROUP BY "user".id, "user".name, "user".pronouns, "user".avatar 
            ORDER BY COUNT("user".name) DESC
            LIMIT 5;
            `;
      pool
        .query(recommendInstructorQuery)
        .then((dbRes) => {
          console.log(dbRes.rows);
          res.send(dbRes.rows);
        })
        .catch((err) => {
          console.error(`${err}`);
          res.sendStatus(500);
        });
    });
});

// Favorite instructors route
router.get("/favorite", rejectUnauthenticated, (req, res) => {
  const userId = req.user.id;
  // console.log(userId);

  const getFavoriteInstructorQuery = `
        Select "favoriteInstuctor".id, "favoriteInstuctor"."instructorId", "user".name, "user".pronouns, "user".avatar,  "user".instagram, "user".facebook, "user".twitter, JSON_agg("tags"."tagName") as "tags" FROM "favoriteInstuctor"
        JOIN "user" on "user".id ="favoriteInstuctor"."instructorId"
        JOIN "userTags" on "userTags"."userId" = "user".id
        JOIN "tags" on "tags".id = "userTags"."tagId"
        WHERE "favoriteInstuctor"."userId" = $1
        GROUP BY "favoriteInstuctor".id, "favoriteInstuctor"."instructorId", "user".name, "user".pronouns,"user".avatar,  "user".instagram, "user".facebook, "user".twitter;
    `;

  pool
    .query(getFavoriteInstructorQuery, [userId])
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error(`${err}`);
    });
});

// DELETE favorite instructor in Gym Goer page view
// Target instructor id using req.params.id
router.delete("/favorite/:id", rejectUnauthenticated, (req, res) => {
  console.log("Favorite instructor id", req.params);

  const sqlQuery = `DELETE FROM "favoriteInstuctor" WHERE id = $1;`;
  const instructorId = [req.params.id];

  pool
    .query(sqlQuery, instructorId)
    .then((result) => {
      console.log("DELETE favorite instructor successful");
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("DELETE favorite instructor failed", err);
      res.sendStatus(500);
    });
});


router.put('/update/:id', (req, res) => {
  const sqlText = `
  UPDATE "user"
  SET about = $1
  WHERE id = $2
  RETURNING "user".about;
  `;
  
  const sqlParams = [
    req.body.result,
    req.params.id
  ];

console.log('I am updating', sqlParams)
  pool.query(sqlText, sqlParams)
  .then(() => {
    res.sendStatus(200)
  })
  .catch((err) => {
    console.error(`Failed to update in Instructor Server Rotue ${err}`)
    res.sendStatus(500)
  })
})



// POST to add favorite instructor to db
router.post("/favorite/:id", rejectUnauthenticated, (req, res) => {
  console.log(req.params.id, "This is user id", req.user.id);

  const addToFavoriteQuery = `INSERT INTO "favoriteInstuctor" ("userId" , "instructorId")
                                        VALUES ($1,$2)
                                    `;

  pool
    .query(addToFavoriteQuery, [req.user.id, req.params.id])
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.post("/newClass", rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
    INSERT INTO "availableClass" ("instructorId", "description", "location", "dateOfWeek", "lat", "lng", "activityId", "startTime" )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  `;
  const sqlParams = [
    req.body.instructorId,
    req.body.description,
    req.body.location,
    req.body.days,
    req.body.lat,
    req.body.lng,
    req.body.activity,
    req.body.time,
  ];

  pool
    .query(sqlQuery, sqlParams)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.error(err);
    });
});

router.delete('/class/id',rejectUnauthenticated,(req,res)=>{
  
})

module.exports = router;
