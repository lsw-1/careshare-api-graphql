const { GraphQLServer } = require("graphql-yoga");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
// const mysql = require("promise-mysql");
const { sequelize } = require("./models/Route");

// const connection = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "",
//   database: "test_graph",
//   connectionLimit: 100
// });

const resolvers = {
  Query,
  Mutation
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: res => ({
    ...res,
    db: sequelize
  })
});

const options = {
  port: 8000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground"
};
server.start(options, ({ port }) =>
  console.log(`Server is running on localhost:${port}`)
);
