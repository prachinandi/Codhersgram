const User = require("./models/user.model");
const Project = require("./models/project.model");
const Story = require("./models/story.model");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    projects: async () => {
      return Project.find({});
    },
    stories: async () => {
      return Story.find({});
    },
  },
  User: {
    projects(parent) {
      return Project.find({ userID: parent.id }).exec();
    },
    stories(parent) {
      return Story.find({ userID: parent.id }).exec();
    },
    followers(parent) {
      return User.find({ _id: { $in: parent.followersIDs } }).exec();
    },
    followings(parent) {
      return User.find({ _id: { $in: parent.followingIDs } }).exec();
    },
  },
  Mutation: {
    addUser: (_, args) => {
      let user = new User(args);
      return user.save();
    },
    addProject: (_, args) => {
      let project = new Project(args);
      return project.save();
    },
    addStory: (_, args) => {
      let story = new Story(args);
      return story.save();
    },
    followUser: async (_, args) => {
      User.updateOne(
        {
          _id: args.userID,
        },
        { $push: { followersIDs: args.selfID } }
      ).exec();
      return User.updateOne(
        {
          _id: args.selfID,
        },
        { $push: { followingIDs: args.userID } }
      ).exec();
    },
  },
};

module.exports = resolvers;
