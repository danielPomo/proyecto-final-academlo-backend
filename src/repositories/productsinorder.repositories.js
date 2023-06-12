const { ProductInOrder, Product } = require("../models");

const moveProducts = async (data) => {
  await ProductInOrder.create(data);
};

const updateStock = async (orderId) => {
  const productsPurchased = await ProductInOrder.findAll({
    where: {
      orderId,
    },
  });
  for (let product of productsPurchased) {
    productId = product.productId;
    await Product.decrement(
      { availableQty: product.qty },
      {
        where: {
          id: productId,
        },
      }
    );
  }
};

module.exports = { moveProducts, updateStock };
