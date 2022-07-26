const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

//get tags for autocomplete
router.get("/tags", (req, res) => {
  const sqlQuery = `
    SELECT * FROM "tags"
    `;
  pool
    .query(sqlQuery)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log("error in GET/tags", err);
    });
});

//search results based of tags -Alex
router.post("/", (req, res) => {
  const responseObject = {};
  const tags = req.body.searchTags;

  const sqlQueryInsert = (tags) => {
    let queryInsert = [];
    for (let i = 0; i < tags.length; i++) {
      queryInsert.push(`$${i + 1}`);
    }
    return queryInsert.join();
  };
  let queryValues = sqlQueryInsert(tags);
  console.log(queryValues);
  const sqlParamsInsert = (tags) => {
    let paramsInsert = [];
    for (let i = 0; i < tags.length; i++) {
      paramsInsert.push(tags[i].id);
    }
    return paramsInsert;
  };

  const sqlQuery = `
    SELECT "user".id, "user".username, JSON_AGG("tags"."tagName") as tags, "user".avatar, "user"."adminLevel", "user".facebook, "user".instagram, "user".twitter, "user".website FROM "user"
	    JOIN "userTags" on "userTags"."userId" = "user".id
	    JOIN "tags" on "userTags"."tagId" = "tags".id
	    WHERE "tags".id IN (${queryValues})
	    GROUP BY "user".id
	    HAVING count(*) >= 1
	    ORDER BY count(tags) DESC;
    `;
  const sqlParams = sqlParamsInsert(tags);
  console.log(sqlParams);
  pool
    .query(sqlQuery, sqlParams)
    .then((dbRes) => {
      res.send(dbRes.rows);
      //responseObject.instructorRecommendations = dbRes.rows
      //return dbRes.rows
    })
    // .then((recommended) => {
    //   const sqlQueryInsert = (response) => {
    //     let queryInsert = [];
    //     for (let i = 0; i < response.row.length; i++) {
    //       queryInsert.push(response.row[i].id);
    //     }
    //     return queryInsert;
    //   };
    //   let queryValues = sqlQueryInsert(recommended);
    //   const sqlQuery = `
    //   SELECT "availableClass".location, "user".id, "activities".activity FROM "user"
    //   JOIN  "availableClass" ON "availableClass"."instructorId" = "user".id
    //   JOIN  "activities" ON "activities".id = "availableClass"."activityId"
    //     WHERE "user".id IN (${queryValues});
    //   `;
    //   pool.query(sqlQuery).then((dbRes)=>{
    //     responseObject.mappedClasses = dbRes.rows
    //     res.send(responseObject)
    //   })
    // })
    .catch((err) => {
      console.log("error in GET/search", err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

module.exports = router;
