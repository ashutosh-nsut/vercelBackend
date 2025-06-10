import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

// ✅ Connect to MongoDB immediately
await connectDB();

// ✅ CORS setup
const corsOption = {
  origin: "https://vercel-frontend-olive-ten.vercel.app",
  credentials: true,
};
app.use(cors(corsOption));
app.options("*", cors(corsOption));

// ✅ Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

// ✅ Export as Vercel serverless function
export default app;
