const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET all users without authentication
router.get('/', (req, res) => {
    console.log('/user GET route');
    const queryText = `SELECT * FROM "user" ORDER BY name ASC ;`;

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