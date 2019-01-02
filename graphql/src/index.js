const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema');

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    age: 17
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    age: 20
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  } 
});

server.listen().then(({ url }) => { 
  console.log(`🚀  Server ready at ${url}`); 
});