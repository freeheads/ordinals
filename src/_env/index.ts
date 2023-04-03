import * as dotenv from "dotenv-safe";
import path from "path";
import { EnvOrdinalsType } from "./types";

dotenv.config({
  allowEmptyValues: false,
  example: path.join(__dirname, `..`, `..`, `.env.ordinals`),
});

let msg: string | undefined;

const { ORDINALS_PORT } = process.env;
if (!ORDINALS_PORT) {
  msg = `process.env.ORDINALS_PORT`;
  throw new Error(msg);
}

const { ORDINALS_CORS_ORIGIN } = process.env;
if (!ORDINALS_CORS_ORIGIN) {
  msg = `process.env.ORDINALS_CORS_ORIGIN`;
  throw new Error(msg);
}

export const envordinals: EnvOrdinalsType = {
  ORDINALS_PORT,
  ORDINALS_CORS_ORIGIN,
};
