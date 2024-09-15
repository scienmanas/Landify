import express, { Express, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
// Unitlity and Routes
import { connectToDB } from "./config/db";
import userRoute from "./routes/user";
import emailRoute from "./routes/send-email";

// load env
config();
console.log(`Current environment: ${process.env.ENV}`);

// connect to DB
connectToDB();

// configure app
const app: Express = express();
const PORT: string = process.env.PORT || "5000";

// CORS Configuration
const corsConfig = {
  // origin: [""],
  origin: "*", // to receive request from every origin
  optionSucessStatus: 200,
};

// middleware to use import routes and enable cors
app.use(express.json());
app.use(cors(corsConfig));
app.use("/api/send-email", emailRoute);
app.use("/api/user", userRoute);

// Routes

// Landing endpoint
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "200 Ok :)" });
});

// Listening at
app.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});
