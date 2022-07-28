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

module.exports = router;