import express from "express";
import tasks from "./routes/tasks/JS";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("zz");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`https://localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
