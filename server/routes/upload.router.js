const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const multer = require("multer");
require("dotenv").config();
const { s3Uploadv2 } = require("../modules/s3Service");

const storage = multer.memoryStorage();
const upload = multer({ storage });
router.post("/", upload.array("image"), async (req, res) => {
  const file = req.files[0];
  const result = await s3Uploadv2(file);
  console.log(result.Location);
  res.send(result);
});

module.exports = router;
