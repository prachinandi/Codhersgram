const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storySchema = new Schema(
  {
    link: String,
    userID: { type: String, required: [true, "User ID is required."] },
    imageURL: {
      type: String,
      required: [true, "Post image is mandatory."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Story", storySchema);
