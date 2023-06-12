const userRoutes = require("../routes/user.routes");
const productRoutes = require("../routes/product.routes");
const cartRoutes = require("../routes/cart.routes");
const orderRoutes = require("../routes/order.routes");

const apiRouter = (app) => {
  app.use(userRoutes);
  app.use(productRoutes);
  app.use(cartRoutes);
  app.use(orderRoutes);
};

module.exports = apiRouter;
