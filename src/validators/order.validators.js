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
  check("totalPrice", "Error en el campo totalPrice")
    .exists()
    .withMessage(
      "El campo totalPrice es requerido como propiedad de la petición"
    )
    .notEmpty()
    .withMessage("El campo totalPrice no debe estar vacío")
    .isCurrency({
      require_symbol: false,
      allow_negatives: false,
      decimal_separator: ".",
      allow_decimal: true,
    })
    .withMessage(
      "El tipo de dato del campo totalPrice debe ser un número decimal que represente un precio, no requiere símbolo de moneda, no puede ser negativo, para separar los decimales se usa una coma, y debe especificar siempre dos dígitos decimales."
    ),
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
