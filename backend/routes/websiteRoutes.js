//Web routes
const express = require("express");
const router = express.Router();
const {
  getWebsite,
  postWebsite,
  updateWebsite,
  deleteWebsite,
} = require("../controllers/websiteController");

router.get("/", getWebsite);
router.post("/", postWebsite);
router.put("/:id", updateWebsite);
router.delete("/:id", deleteWebsite);

module.exports = router;
