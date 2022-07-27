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
	                    GROUP BY "user".id;`;

    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
        })
        .catch((err) => {
            console.log('GET /user error', err);
            res.sendStatus(500)
        })
});

router.get('/:id',(req, res) => {
    const queryText = `
    SELECT "user".name, JSON_AGG("tags"."tagName") as tags, "user".avatar, "user"."adminLevel", "user".about, "user".pronouns, "user".facebook, "user".instagram, "user".twitter, "user".website, ARRAY_AGG("availableClass") as classes FROM "user"
	JOIN "userTags" on "userTags"."userId" = "user".id
	JOIN "availableClass" on "availableClass"."instructorId" = "user".id
	JOIN "tags" on "userTags"."tagId" = "tags".id
	WHERE "tags".id IN (1,2,3,4) 
	GROUP BY "user".id
	HAVING count(*) >= 1
	ORDER BY count(tags) DESC; 
    `;
    
  pool.query(queryText)
    .then((results) => {
      res.send(results.rows)
      console.log('InstructorDetail', results.rows)
    })
    .catch((err) => {
      console.log("GET InstructorDetail failed", err);
      res.sendStatus(500);
    });

    
})
module.exports = router;