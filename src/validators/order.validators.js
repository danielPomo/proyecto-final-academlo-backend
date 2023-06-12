const { check } = require("express-validator");
const validateResult = require("../utils/validationResult");

const createOrderWhenPurchasingCartValidator = [
  check("userId", "Error en el campo userId")
    .exists()
    .withMessage("El campo userId es requerido como propiedad de la petición")
    .notEmpty()
    .withMessage("El campo userId no debe estar vacío")
    .isInt()
    .withMessage("El tipo de dato del campo userId debe ser un número entero"),
  validateResult,
];

const getAllOrdersByUserValidator = [
  check("userId", "Error en el campo userId")
    .exists()
    .withMessage("El campo userId es requerido como propiedad de la petición")
    .notEmpty()
    .withMessage("El campo userId no debe estar vacío")
    .isInt()
    .withMessage("El tipo de dato del campo userId debe ser un número entero"),
];

const checkOutValidator = [
  check("userId", "Error en el campo userId")
    .exists()
    .withMessage("El campo userId es requerido como propiedad de la petición")
    .notEmpty()
    .withMessage("El campo userId no debe estar vacío")
    .isInt()
    .withMessage("El tipo de dato del campo userId debe ser un número entero"),
];

module.exports = {
  createOrderWhenPurchasingCartValidator,
  getAllOrdersByUserValidator,
  checkOutValidator,
};
