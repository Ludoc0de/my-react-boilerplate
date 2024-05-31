//Web routes
const express = require("express");
const {
  getWebsite,
  postWebsite,
  updateWebsite,
  deleteWebsite,
} = require("../controllers/websiteController");
const router = express.Router();

router.get("/", getWebsite);
router.post("/", postWebsite);
router.put("/:id", updateWebsite);
router.delete("/:id", deleteWebsite);

module.exports = router;
