const { ProductInOrder } = require("../models");

const moveProducts = async (data) => {
  await ProductInOrder.create(data);
};

module.exports = { moveProducts };
