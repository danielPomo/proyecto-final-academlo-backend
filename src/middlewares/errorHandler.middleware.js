const errorHandler = (error, req, res, next) => {
  const { status } = error;
  return res.status(status || 500).json({
    errorName: error.name,
    message: error.message,
  });
};

module.exports = errorHandler;
