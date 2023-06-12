const ProductServices = require("../services/product.services");

const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, availableQty, userId, productImage } =
      req.body;
    await ProductServices.createNewProduct({
      name,
      description,
      price,
      availableQty,
      userId,
      productImage,
    });

    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const editProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, price, status, productImage, availableQty } =
      req.body;
    await ProductServices.editProductInfo({
      id,
      name,
      description,
      price,
      status,
      productImage,
      availableQty,
    });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const getAvailableProducts = async (req, res, next) => {
  try {
    const availableProducts = await ProductServices.getProductsInStock();
    res.status(200).json(availableProducts);
  } catch (error) {
    next(error);
  }
};

module.exports = { createProduct, editProduct, getAvailableProducts };
