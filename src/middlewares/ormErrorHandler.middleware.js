const {
  ValidationError,
  DatabaseError,
  ConnectionAcquireTimeoutError,
  ConnectionError,
  ConnectionRefusedError,
  ConnectionTimedOutError,
  InvalidConnectionError,
} = require("sequelize");

const ormErrorHandler = (error, req, res, next) => {
  if (
    error instanceof ConnectionAcquireTimeoutError ||
    error instanceof ConnectionError ||
    error instanceof ConnectionRefusedError ||
    error instanceof ConnectionTimedOutError ||
    error instanceof InvalidConnectionError
  ) {
    return res.status(409).json({
      name: error.name,
      message: "Database connection error",
    });
  }

  if (error instanceof ValidationError) {
    return res.status(400).json({
      name: error.name,
      message: error.message,
      errors: error.errors,
    });
  }

  if (error instanceof DatabaseError) {
    return res.status(409).json({
      name: error.name,
      message: error.message,
      errors: error.errors,
    });
  }
  next(error);
};

module.exports = ormErrorHandler;
