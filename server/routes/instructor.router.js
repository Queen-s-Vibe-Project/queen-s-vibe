const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET all instructors without authentication
// JOIN user, userTags, and tags tables and use array-agg to 
// get array of object for tag name
router.get('/', (req, res) => {
    console.log('/user GET route');
    const queryText = `SELECT "user".name, "user"."adminLevel", "user".avatar, array_agg(tags."tagName") AS tags
	                    FROM "user"
	                    JOIN "userTags"
	                    ON "userTags"."userId" = "user".id
	                    JOIN tags
	                    ON "userTags"."tagId" = tags.id
	                    WHERE "user"."adminLevel" = 'instructor'
	                    GROUP BY "user".id
                        LIMIT 3;`;

    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
        })
        .catch((err) => {
            console.log('GET /user error', err);
            res.sendStatus(500)
        })
});

module.exports = router;