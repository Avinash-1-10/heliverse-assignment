import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 4000;
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
