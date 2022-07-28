const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET all instructors without authentication
// JOIN user, userTags, and tags tables and use array-agg to
// get array of object for tag name
router.get("/", (req, res) => {
  console.log("/user GET route");
  const queryText = `SELECT "user".id, "user".name, "user"."adminLevel", "user".about, "user".pronouns, "user".avatar, array_agg(tags."tagName") AS tags,  "user"."adminLevel", "user".facebook, "user".instagram, "user".twitter, "user".website 
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
module.exports = router;
