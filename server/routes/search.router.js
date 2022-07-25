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
    SELECT "user".id, "user".username, JSON_AGG("tags".tag_name) as tags FROM "user"
    JOIN "user_tags" ON "user_tags".user_id = "user".id
    JOIN "tags" ON "user_tags".tags_id = "tags".id
    WHERE "tags".id IN (${queryValues})
    GROUP BY "user".id
    HAVING count(*) >=1
    ORDER BY count(tags) DESC;
    `;
  const sqlParams = sqlParamsInsert(tags);
  console.log(sqlParams);
  pool
    .query(sqlQuery, sqlParams)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
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
