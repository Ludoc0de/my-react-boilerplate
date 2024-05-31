//Model website
const mongoose = require("mongoose");

const websiteSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("website", websiteSchema);
