//Model website
const mongoose = require("mongoose");

const websiteSchema = new mongoose.Schema(
  {
    //associate user to website
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Website", websiteSchema);
