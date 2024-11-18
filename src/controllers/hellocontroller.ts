import { Request, Response } from "express";

const helloController = (req: Request, res: Response) => {
  res.send("hello it's racoon api");
};

export default helloController;
