import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { eventsRouters } from "./routes/eventsRouters.js";
import { stripeRouters } from "./routes/stripeRouters.js";

const app = express();

dotenv.config();

const PORT = process.env.REACT_APP_PORT || 3005;
const DB_USER = process.env.REACT_APP_DB_USER;
const DB_PASSWORD = process.env.REACT_APP_DB_PASSWORD;
const DB_NAME = process.env.REACT_APP_DB_NAME;

app.use(cors());
app.use((req, res, next) => {
  if (req.originalUrl === '/api/stripe/webhook') {
    next();
  } else {
    express.json()(req, res, next);
  }
});
app.use("/api/events", eventsRouters);
app.use("/api/stripe", stripeRouters);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}...`);
});

mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.1g15rt4.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
  .then(() => console.log(`Mongo  started on port ${PORT}`))
  .catch((error) => console.error("MongoDB connection failed:", error.message));