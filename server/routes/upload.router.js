const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const multer = require("multer");
require("dotenv").config();
const { s3Uploadv2 } = require("../modules/s3Service");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
  } else {
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 100000000000, files: 1 },
});
router.post("/", upload.array("image"), async (req, res) => {
  const file = req.files[0];
  const result = await s3Uploadv2(file);
  res.json({ status: "success", result });
});

module.exports = router;
