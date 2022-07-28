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

// InstructorDetailInfo
router.get("/:id", (req, res) => {
  
  const queryText = `
    SELECT "user".id, "user".name, "user"."adminLevel", "user".about, "user".pronouns, "user".avatar, array_agg(tags."tagName") AS tags,  "user"."adminLevel", "user".facebook, "user".instagram, "user".twitter, "user".website, "activities".activity, "availableClass".location, "availableClass"."dateOfWeek", "availableClass"."startTime"
      FROM "user"
      JOIN "userTags"
      ON "userTags"."userId" = "user".id
      JOIN tags
      ON "userTags"."tagId" = tags.id
      JOIN "availableClass"
      ON "user".id = "availableClass"."instructorId"
      JOIN "activities" 
      ON "activities".id = "availableClass"."activityId"
      WHERE "user".id = $1 AND "user"."adminLevel" = 'instructor'
    GROUP BY "user".id, "activities".activity, "availableClass".location, "availableClass"."dateOfWeek", "availableClass"."startTime"
    `;

    const queryParams = [
      req.params.id
    ]
  console.log('what is this', req.params.id)
  

  pool.query(queryText, queryParams )
    .then((results) => {
      res.send(results.rows);
      console.log("InstructorDetail", results.rows);
    })
    .catch((err) => {
      console.log("GET InstructorDetail failed", err);
      res.sendStatus(500);
    });
});

// Recommended instructor route
router.get('/recommend',(req,res)=>{
    const userId = req.user.id
    console.log(userId);

    const tagQuery = `
        SELECT "tags"."tagName" FROM "userTags"
        JOIN "tags" on "tags".id = "userTags"."tagId" 
        WHERE "userTags"."userId" = $1;
    `

    pool.query(tagQuery,[userId])
        .then((dbRes)=>{
            //console.log(dbRes.rows[0].tagName);

            return dbRes.rows[0].tagName
        })
        .then((tagName)=>{
            const recommendInstructorQuery = `
                SELECT "user".name, "user".pronouns , "tags"."tagName" FROM "user"
                JOIN "userTags" on "user".id = "userTags"."userId"
                JOIN "tags" on "tags".id = "userTags"."tagId"
                WHERE "user"."adminLevel" = 'instructor' AND "tags"."tagName" =  '${tagName}'
                GROUP BY "user".name, "user".pronouns, "tags"."tagName";
            `
            
            pool.query(recommendInstructorQuery)
                .then((dbRes)=>{
                    console.log(dbRes.rows);
                    res.send(dbRes.rows)
                }).catch((err)=>{
                    console.error(`${err}`);
                    res.sendStatus(500)
                })
        })
})

// Favorite instructors route
router.get('/favorite',(req,res)=>{
    const userId = req.user.id

    console.log(userId);

    const getFavoriteInstructorQuery = `
        Select "favoriteInstuctor".id, "favoriteInstuctor"."instructorId", "user".name, "user".pronouns, "user".instagram, "user".facebook, "user".twitter, JSON_agg("tags"."tagName") as "tags" FROM "favoriteInstuctor"
        JOIN "user" on "user".id ="favoriteInstuctor"."instructorId"
        JOIN "userTags" on "userTags"."userId" = "user".id
        JOIN "tags" on "tags".id = "userTags"."tagId"
        WHERE "favoriteInstuctor"."userId" = $1
        GROUP BY "favoriteInstuctor".id, "favoriteInstuctor"."instructorId", "user".name, "user".pronouns, "user".instagram, "user".facebook, "user".twitter;
    `

    pool.query(getFavoriteInstructorQuery,[userId])
        .then((dbRes)=>{
            res.send(dbRes.rows)
        }).catch((err)=>{
            console.error(`${err}`);
        })
})

module.exports = router;

