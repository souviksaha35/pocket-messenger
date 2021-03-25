const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client')
const fs = require('fs');
const path = require('path');
const { getUserId } = require('./src/utils')
const Mutation = require('./src/resolvers/Mutation')
const User = require('./src/resolvers/User')
const MongoClient = require('mongodb').MongoClient;
const prisma = new PrismaClient()

const uri = "mongodb+srv://souvik35:Souvik2000saha@cluster0.yt3k7.mongodb.net/<dbname>?retryWrites=true&w=majority";

// 1
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('Connected Successfully');
  client.close();
});

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
  },
  Mutation,
  User
}


// 3
const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'), 'utf8'
  ),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      userId: req && req.headers.authorization ? getUserId(req) : null
    };
  }
});

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
);
