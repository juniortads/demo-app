const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
    age: Int
  }
  type Query {
    books: [Book]
  }
`;

module.exports = typeDefs;