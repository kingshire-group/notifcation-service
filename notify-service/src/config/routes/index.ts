import express from "express";
import http from "http";
// import path from "path";

// const rootApi = "/api-noti/v1";

export function init(app: express.Application): void {
  const router: express.Router = express.Router();
  app.get("/", (req, res) => res.json({ message: "notification-service up" }));
  app.use((req, res) => {
    res.status(404).send(http.STATUS_CODES[404]);
  });
  app.use(router);
}
