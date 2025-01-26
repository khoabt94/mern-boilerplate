import { AppError } from "@utils/app-error.util";
import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).send({
      message: err.message,
      errorCode: err?.errorCode,
    });
    return next();
  }

  res.status(err.statusCode ?? 500).send({
    message: "Something went wrong",
    errorCode: "Unexpected error",
  });
  return next();
};
