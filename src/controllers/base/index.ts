import { Request, Response } from "express";

export const base = (req: Request, res: Response): void => {
  const object = {
    message: `freeheads.io ordinals server`,
    success: true,
  };
  res.status(200).json(object);
};
