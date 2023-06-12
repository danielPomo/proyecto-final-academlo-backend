const { Product } = require("../models");
const { User } = require("../models");

const createProduct = async ({
  name,
  description,
  price,
  availableQty,
  userId,
  productImage,
}) => {
  await Product.create({
    name,
    description,
    price,
    availableQty,
    userId,
    productImage,
  });
};

const editProduct = async ({
  id,
  name,
  description,
  price,
  status,
  productImage,
  availableQty,
}) => {
  await Product.update(
    {
      name,
      description,
      price,
      status,
      productImage,
      availableQty,
    },
    {
      where: { id },
    }
  );
};

const getAvailableProducts = async () => {
  const availableProducts = await Product.findAll({
    where: {
      "$Product.status$": "available",
    },
    include: [
      {
        model: User,
      },
    ],
  });
  return availableProducts;
};

module.exports = { createProduct, editProduct, getAvailableProducts };
