const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Project name is required."],
    },
    desc: String,
    link: String,
    userID: { type: String, required: [true, "User ID is required."] },
    imageURL: {
      type: String,
      required: [true, "Post image is mandatory."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
