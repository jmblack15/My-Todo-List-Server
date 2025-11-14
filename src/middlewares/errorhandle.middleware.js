import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

  if (statusCode >= 500) {
    console.error(err);
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    errorCode:
      err.errorCode ||
      (statusCode === StatusCodes.BAD_REQUEST
        ? "VALIDATION_ERROR"
        : statusCode >= 500
          ? "SERVER_ERROR"
          : "ERROR"),
    details: err.details || undefined,
  });
}

export { errorHandlerMiddleware };