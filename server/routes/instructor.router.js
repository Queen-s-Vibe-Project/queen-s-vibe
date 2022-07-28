const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET all instructors without authentication
// JOIN user, userTags, and tags tables and use array-agg to
// get array of object for tag name


router.get('/', (req, res) => {
  console.log('/user GET route');
  const queryText = `SELECT "user".id, "user".name, "user"."adminLevel", "user".avatar, array_agg(tags."tagName") AS tags
	                    FROM "user"
	                    JOIN "userTags"
	                    ON "userTags"."userId" = "user".id
	                    JOIN tags
	                    ON "userTags"."tagId" = tags.id
	                    WHERE "user"."adminLevel" = 'instructor'
	                    GROUP BY "user".id
                        LIMIT 3;`;

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
// router.get("/:id", (req, res) => {

//   const queryText = `SELECT * FROM "user" WHERE "user".id = $1;`;
//   // const queryText = `
//   //   SELECT "user".id, "user".name, "user"."adminLevel", "user".about, "user".pronouns, "user".avatar, array_agg(tags."tagName") AS tags,  "user"."adminLevel", "user".facebook, "user".instagram, "user".twitter, "user".website, "activities".activity, "availableClass".location, "availableClass"."dateOfWeek", "availableClass"."startTime"
//   //     FROM "user"
//   //     JOIN "userTags"
//   //     ON "userTags"."userId" = "user".id
//   //     JOIN tags
//   //     ON "userTags"."tagId" = tags.id
//   //     JOIN "availableClass"
//   //     ON "user".id = "availableClass"."instructorId"
//   //     JOIN "activities" 
//   //     ON "activities".id = "availableClass"."activityId"
//   //     WHERE "user".id = $1 AND "user"."adminLevel" = 'instructor'
//   //   GROUP BY "user".id, "activities".activity, "availableClass".location, "availableClass"."dateOfWeek", "availableClass"."startTime";
//   //   `;

//   const queryParams = [req.params.id];

//   console.log('what is this', req.params.id)

//   pool.query(queryText, queryParams)
//     .then((results) => {
//       console.log("InstructorDetail", results.rows[0]);
//     })
//     .catch((err) => {
//       console.log("GET InstructorDetail failed", err);
//       res.sendStatus(500);
//     });
// });

// Recommended instructor route
router.get('/recommend', (req, res) => {
  const userId = req.user.id
  console.log(userId);

  const tagQuery = `
        SELECT JSON_AGG("tags"."tagName") AS "tags" FROM "userTags"
        JOIN "tags" on "tags".id = "userTags"."tagId" 
        WHERE "userTags"."userId" = $1;
    `

  pool.query(tagQuery, [userId])
    .then((dbRes) => {
        
        console.log(dbRes.rows[0].tags,dbRes.rows[0].tags.length);
        let listOfTags = '';

        for (let index = 0; index < dbRes.rows[0].tags.length; index++) {
            console.log('last');
            if (index === dbRes.rows[0].tags.length -1) {
                listOfTags += `\'${dbRes.rows[0].tags[index]}\'`
            }else{
                console.log('loop',index);
                listOfTags += `\'${dbRes.rows[0].tags[index]}\',`
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
            `

      pool.query(recommendInstructorQuery)
        .then((dbRes) => {
          console.log(dbRes.rows);
          res.send(dbRes.rows)
        }).catch((err) => {
          console.error(`${err}`);
          res.sendStatus(500)
        })
    })

    
})

// Favorite instructors route
router.get('/favorite', (req, res) => {
  const userId = req.user.id

  console.log(userId);

  const getFavoriteInstructorQuery = `
        Select "favoriteInstuctor".id, "favoriteInstuctor"."instructorId", "user".name, "user".pronouns, "user".avatar,  "user".instagram, "user".facebook, "user".twitter, JSON_agg("tags"."tagName") as "tags" FROM "favoriteInstuctor"
        JOIN "user" on "user".id ="favoriteInstuctor"."instructorId"
        JOIN "userTags" on "userTags"."userId" = "user".id
        JOIN "tags" on "tags".id = "userTags"."tagId"
        WHERE "favoriteInstuctor"."userId" = $1
        GROUP BY "favoriteInstuctor".id, "favoriteInstuctor"."instructorId", "user".name, "user".pronouns,"user".avatar,  "user".instagram, "user".facebook, "user".twitter;
    `

  pool.query(getFavoriteInstructorQuery, [userId])
    .then((dbRes) => {
      res.send(dbRes.rows)
    }).catch((err) => {
      console.error(`${err}`);
    })
})

module.exports = router;

