import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

//connect to db
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to the Database!"));

const app = express();

//midllewares
app.use(express.json());
app.use(cors());

// /api/my/user --> request can be of type Get/Post/Put... handle it in routes, keeping index file clean
app.use("/api/my/user", myUserRoute);

//listen to a port
const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`);
});
