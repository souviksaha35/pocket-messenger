const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    tracksForName:[Track!]!
  }
  type Track {
    id: ID!
    title: Sting!
    author: Author!
    thumbnail: String
    length: Int
    moduleCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports()