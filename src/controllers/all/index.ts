import { Request, Response } from "express";

export const all = (req: Request, res: Response): void => {
  const object = {
    message: `The requested endpoint '${req.originalUrl}' does not exist.`,
    endpoints: {
      base: `GET /`,
      health: `GET /health`,
    },
    success: false,
  };
  res.status(404).json(object);
};
