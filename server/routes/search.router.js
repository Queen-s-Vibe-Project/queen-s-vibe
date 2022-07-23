const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  const sqlQueryInsert = (tags) => {
    let queryInsert = [];
    for (let i = 0; i < tags.length; i++) {
      queryInsert.push(`($${i + 1})`);
    }
    return queryInsert.join();
  };
  let queryValues = sqlQueryInsert(req.body.tags);
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
  WHERE "tags".id IN ${queryValues}
  GROUP BY "user".id 
  HAVING count(*) >=3
  ORDER BY count(tags) DESC;
  `;
  const sqlParams = sqlParamsInsert(req.body.tags);

  pool.query(sqlQuery, sqlParams).then((dbRes) => {});
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

module.exports = router;
