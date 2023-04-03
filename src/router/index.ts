import { Router } from "express";
import { controllers } from "../controllers";

const router = Router();
router.get("*", controllers.all);
router.get("/", controllers.base);
router.get("/health", controllers.health);
export { router };
