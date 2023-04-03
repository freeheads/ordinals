import { Request, Response } from "express";

export type TypesControllers = {
  all: (req: Request, res: Response) => void;
  base: (req: Request, res: Response) => void;
  health: (req: Request, res: Response) => void;
};
