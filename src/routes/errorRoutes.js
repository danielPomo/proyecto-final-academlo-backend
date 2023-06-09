const logError = require("../middlewares/logError.middleware");
const ormErrorHandler = require("../middlewares/ormErrorHandler.middleware");
const errorHandler = require("../middlewares/errorHandler.middleware");

const errorRoutes = (app) => {
  app.use(logError, ormErrorHandler, errorHandler);

  app.use("*", (req, res) => {
    res.status(404).json({
      message: "La ruta de la petición no ha sido encontrada",
    });
  });
};

module.exports = errorRoutes;
