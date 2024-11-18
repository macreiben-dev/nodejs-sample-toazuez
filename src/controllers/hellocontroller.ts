import { Request, Response } from "express";

const helloController = (req: Request, res: Response) => {
  res.send("hello it's racoon api pif paf");
};

export default helloController;
