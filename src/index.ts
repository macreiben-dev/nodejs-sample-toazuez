import express from "express";
import helloController from "./controllers/hellocontroller";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/hello", helloController);

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
