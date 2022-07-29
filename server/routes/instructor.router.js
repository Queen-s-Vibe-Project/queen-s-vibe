const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET all instructors without authentication
// JOIN user, userTags, and tags tables and use array-agg to
// get array of object for tag name


router.get('/',rejectUnauthenticated ,(req, res) => {

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

router.get('/profile/:id',rejectUnauthenticated,(req,res)=>{
    


  const profileQuery = `
        SELECT * FROM "user"
        WHERE "user".id = $1;
        
    pool.query(profileQuery,[req.params.id])
        .then((dbRes)=>{
            res.send(dbRes.rows[0]);
        }).catch((err)=>{
            console.error(` Profile error: ${err}`);
        })
})


router.get('/class/:id',rejectUnauthenticated,(req,res)=>{


        const userId =req.params.id;

    const classQuery = `
    SELECT "user".id, "availableClass"."dateOfWeek", "availableClass"."startTime", "availableClass".location, "activities".activity  FROM "availableClass"
    JOIN "user" ON "user".id = "availableClass"."instructorId"
    JOIN "activities" on "activities".id = "availableClass"."activityId"
    WHERE "user".id = $1;
    `

    pool.query(classQuery,[userId])
        .then((dbRes)=>{
            
            res.send(dbRes.rows);
        }).catch((err)=>{
            console.error(`class error: ${err}`);
        })
})

router.get('/tags/:id',rejectUnauthenticated,(req,res)=>{
  console.log(req.params.id);

  const tagsQuery = `
    SELECT "tags"."tagName" FROM "userTags"
    JOIN "tags" on "tags".id = "userTags"."tagId"
    WHERE "userTags"."userId" = $1;
  `

  pool.query(tagsQuery, [req.params.id])
    .then((dbRes)=>{
      res.send(dbRes.rows)
    }).catch((error)=>{
      console.error(error);
    })
  
})

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

      console.log(dbRes.rows[0].tags, dbRes.rows[0].tags.length);
      let listOfTags = '';

      for (let index = 0; index < dbRes.rows[0].tags.length; index++) {
        console.log('last');
        if (index === dbRes.rows[0].tags.length - 1) {
          listOfTags += `\'${dbRes.rows[0].tags[index]}\'`
        } else {
          console.log('loop', index);
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
router.get('/favorite',rejectUnauthenticated ,(req, res) => {
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

router.post('/favorite/:id',rejectUnauthenticated,rejectUnauthenticated,(req,res)=>{
  console.log(req.params.id, 'This is user id' ,req.user.id);

  const addToFavoriteQuery = `
    INSERT INTO "favoriteInstuctor" ("userId" , "instructorId")
    VALUES ($1,$2)
  `

  pool.query(addToFavoriteQuery, [req.user.id,req.params.id])
    .then((dbRes)=>{
      res.sendStatus(200)
    }).catch((err)=>{
      console.error(err);
    })
})

module.exports = router;

