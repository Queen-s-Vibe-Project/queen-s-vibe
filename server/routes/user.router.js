const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get("/", rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post("/register", (req, res, next) => {
  const tags = req.body.tags;
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  console.log(req.body);

  const queryText = `INSERT INTO "user" (username, password, name, pronouns, "adminLevel", avatar)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`;
  pool
    .query(queryText, [
      username,
      password,
      req.body.name,
      req.body.pronouns,
      req.body.adminLevel,
      req.body.avatar,
    ])
    .then((debRes) => {
      console.log("response from registration", debRes.rows[0].id);

      return debRes.rows[0].id;
    })
    .then((id) => {
      const sqlQueryInsert = (tags) => {
        let queryInsert = [];
        for (let i = 0; i < tags.length; i++) {
          queryInsert.push(`($1, $${i + 2})`);
        }
        return queryInsert.join();
      };
      let queryValues = sqlQueryInsert(tags);
      console.log(queryValues);
      const sqlParamsInsert = (tags) => {
        let paramsInsert = [id];
        for (let i = 0; i < tags.length; i++) {
          paramsInsert.push(tags[i].id);
        }
        return paramsInsert;
      };

      const insertQuery = `
      INSERT INTO "userTags" ("userId","tagId")
      VALUES ${queryValues};
      `;
      const sqlParams = sqlParamsInsert(tags);
      console.log(sqlParams);
      pool.query(insertQuery, sqlParams).then(() => {
        res.sendStatus(201);
      });
    })
    .catch((err) => {
      console.log("User registration failed: ", err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post("/login", userStrategy.authenticate("local"), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post("/logout", (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.get('/upcomingClass',rejectUnauthenticated,(req,res)=>{
  //console.log('in upcoming', req.user.id);

  const upcomingClass = `
    SELECT "userClass".id, "userClass"."userId", "availableClass"."instructorId", "availableClass"."dateOfWeek", "availableClass"."startTime", "activities".activity FROM "userClass"
    JOIN "availableClass" ON "availableClass".id = "userClass"."classId"
    JOIN "activities" ON "activities".id = "availableClass"."activityId" 
    WHERE "userClass"."userId" = $1;
  `

  pool.query(upcomingClass, [req.user.id])
    .then((dbRes)=>{
      res.send(dbRes.rows)
    }).catch((error)=>{
      console.error(`Error in upcomming router: ${error}`);
      res.sendStatus(500)
    })

})

router.delete('/upcomingClass/:id',rejectUnauthenticated,(req,res)=>{
  const deleteClassQuery = `
    DELETE FROM "availableClass"
    WHERE "availableClass".id = $1;
  `

  pool.query(deleteClassQuery,[req.params.id])
    .then(()=>{
       res.sendStatus(200)
    }).catch((error)=>{
      console.error(`Error ${error}`);
      res.sendStatus(500)
    })

})

module.exports = router;
