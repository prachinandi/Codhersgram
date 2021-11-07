const User = require("./models/user.model");

const resolvers = {
  Query: {
    users: async () => User.find({}),
  },
};

module.exports = resolvers;
