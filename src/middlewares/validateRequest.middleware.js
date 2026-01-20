import { StatusCodes } from "http-status-codes";

const validateRequestMiddleware = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });

    if (error) {
      const validateError = new Error('Validation failed');
      validateError.statusCode = StatusCodes.BAD_REQUEST;
      validateError.details = error.details.map(detail => detail.message);
      return next(validateError);
    }

    req.body = value;
    next(error)
  }
}

export { validateRequestMiddleware };