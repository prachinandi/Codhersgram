const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    name: String!
    uid: String!
    email: String
    bio: String
    avatar: String
    url: String
    github: String
    followingIDs: [String]
    followersIDs: [String]
  }
  type Query {
    users: [User]
  }
`;

module.exports = typeDefs;
