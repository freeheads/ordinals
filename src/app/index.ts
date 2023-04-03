import cors, { CorsOptions } from "cors";
import express, { Application } from "express";
import { router } from "../router";
import { envordinals } from "../_env";

const { ORDINALS_CORS_ORIGIN } = envordinals;

const app: Application = express();

const corsOptions: CorsOptions = {
  origin: ORDINALS_CORS_ORIGIN.split(`,`),
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
export { app };
