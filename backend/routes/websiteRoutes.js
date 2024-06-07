//Web routes
const express = require("express");
const router = express.Router();
const {
  getWebsite,
  postWebsite,
  updateWebsite,
  deleteWebsite,
} = require("../controllers/websiteController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getWebsite);
router.post("/", protect, postWebsite);
router.put("/:id", protect, updateWebsite);
router.delete("/:id", protect, deleteWebsite);

module.exports = router;
