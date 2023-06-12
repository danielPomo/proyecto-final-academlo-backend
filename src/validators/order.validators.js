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
  check("status", "Error en el campo status")
    .optional()
    .notEmpty()
    .withMessage("El campo status no debe estar vacío")
    .isString()
    .withMessage(
      "El tipo de dato del campo status debe ser una cadena de texto"
    ),
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
