const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Your name is required."],
    },
    uid: {
      type: String,
      required: [true, "UID is required to validate user."],
    },
    email: String,
    bio: String,
    url: String,
    github: String,
    avatar: {
      type: String,
      default: "https://avatars.githubusercontent.com/u/39991296?v=4",
    },
    followingIDs: [String],
    followersIDs: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
