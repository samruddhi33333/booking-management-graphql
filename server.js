import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";
import typeDefs from "./schema.js";  // ✅ Import schema
import resolvers from "./resolvers.js"; // Make sure this file exists

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`🚀 Server running on http://localhost:4000/graphql`);
  });
};

export default startServer;
