import express from "express";
import helloController from "./controllers/hellocontroller";

const app = express();
const port = 3000;

app.get("/hello", helloController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});