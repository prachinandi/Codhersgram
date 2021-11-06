const { ApolloServer, gql } = require("apollo-server");

const users = [
  {
    id: 1,
    name: "Miss Briganja",
    email: "miss@briganja.com",
    bio: "I am talented",
    avatar: "https://i.pravatar.cc/300?img=1",
    url: "https://website.com",
    github: "username",
    followingIDs: ["5", "1"],
    followersIDs: ["2", "9"],
    projectsIDs: ["111", "222"],
    storiesIDs: ["211", "311"],
  },
];

const typeDefs = gql`
  type User {
    name: String
    email: String
    bio: String
    avatar: String
    url: String
    github: String
    followingIDs: [String]
    followersIDs: [String]
    projectsIDs: [String]
    storiesIDs: [String]
  }
  type Query {
    users: [User]
  }
`;

const resolvers = {
  Query: {
    users: () => users,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
