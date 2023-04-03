import http from "http";
import { app } from "./app";
import { envordinals } from "./_env";

const { ORDINALS_PORT } = envordinals;

export const server = async (): Promise<void> => {
  const httpServer = http.createServer(app);

  httpServer.listen(ORDINALS_PORT, () => {
    console.log(`[ordinals] Server listening on ${ORDINALS_PORT}`);
  });
};
