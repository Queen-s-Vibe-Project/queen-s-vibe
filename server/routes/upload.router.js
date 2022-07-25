const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const multer = require("multer");

const upload = multer({ dest: "./public/uploads" });
router.post("/", upload.single("file"), (req, res) => {
  res.json({ status: "success" });
});

module.exports = router;
