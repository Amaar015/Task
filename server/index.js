import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./db/connection.js";
dotenv.config(".env");
const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
connectDB();

app.use("/zetsol/auth", authRoutes);
app.listen(port, () => {
  console.log(`Server is running on ${port}`.bgCyan.white);
});
