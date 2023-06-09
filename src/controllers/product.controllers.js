const ProductServices = require("../services/product.services");

const createProduct = async (req, res, next) => {
  try {
    console.log("inicio del product controller");
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
    console.log("despues de volver de servicios del product");
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const editProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, price, status, productImage } = req.body;
    await ProductServices.editProductInfo({
      id,
      name,
      description,
      price,
      status,
      productImage,
    });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const getAvailableProducts = async (req, res, next) => {
  try {
    const availableProducts = await ProductServices.getProductsInStock();
    res.json(availableProducts);
  } catch (error) {
    next(error);
  }
};

module.exports = { createProduct, editProduct, getAvailableProducts };
