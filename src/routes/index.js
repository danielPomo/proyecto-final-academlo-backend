const userRoutes = require("../routes/user.routes");
const productRoutes = require("../routes/product.routes");
const cartRoutes = require("../routes/cart.routes");
const orderRoutes = require("../routes/order.routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger.json");
const apiRouter = (app) => {
  app.use(userRoutes);
  app.use(productRoutes);
  app.use(cartRoutes);
  app.use(orderRoutes);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
};

module.exports = apiRouter;
