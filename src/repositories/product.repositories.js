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
  console.log("desde el inicio del product repository");
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
}) => {
  await Product.update(
    {
      name,
      description,
      price,
      status,
      productImage,
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
