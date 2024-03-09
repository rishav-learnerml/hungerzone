import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

//midllewares
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});

//listen to a port
const PORT = 7001;

app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`);
});
