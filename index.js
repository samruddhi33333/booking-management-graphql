import connectDB from "./config.js"; // MongoDB connection
import startServer from "./server.js"; // Import server setup

connectDB();
startServer(); // Start GraphQL server
