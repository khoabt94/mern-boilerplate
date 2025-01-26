import express, { Express } from "express";
import session from "cookie-session";
import cors from "cors";
import { config } from "@config/app.config";
import logger from "morgan";

export default function (app: Express) {
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    session({
      name: "session",
      keys: [config.SESSION_SECRET],
      maxAge: Number(config.SESSION_MAX_AGE),
      secure: config.NODE_ENV === "production",
      sameSite: "lax",
    })
  );

  app.use(
    cors({
      origin: config.CLIENT_URL,
      credentials: true,
    })
  );
}
