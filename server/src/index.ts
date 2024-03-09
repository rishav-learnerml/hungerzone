import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

//connect to db
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to the Database!"));

const app = express();

//midllewares
app.use(express.json());
app.use(cors());

//test response
app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});

//listen to a port
const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`);
});
