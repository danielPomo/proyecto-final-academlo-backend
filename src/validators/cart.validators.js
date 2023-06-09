const { check } = require("express-validator");
const validateResult = require("../utils/validationResult");

const addProductToCartValidator = [
  check("productId", "Error en el campo productId")
    .exists()
    .withMessage(
      "El campo productId es requerproductIdo como propiedad de la petición"
    )
    .notEmpty()
    .withMessage("El campo productId no debe estar vacío")
    .isInt()
    .withMessage(
      "El tipo de dato del campo productId debe ser un número entero"
    ),
  check("price", "Error en el campo price")
    .exists()
    .withMessage("El campo price es requerido como propiedad de la petición")
    .notEmpty()
    .withMessage("El campo price no debe estar vacío")
    .isCurrency({
      require_symbol: false,
      allow_negatives: false,
      decimal_separator: ".",
      allow_decimal: true,
    })
    .withMessage(
      "El tipo de dato del campo price debe ser un número decimal que represente un precio, no requiere símbolo de moneda, no puede ser negativo, para separar los decimales se usa una coma, y debe especificar siempre dos dígitos decimales."
    ),
  check("qty", "Error en el campo qty")
    .optional()
    .notEmpty()
    .withMessage("El campo qty no debe estar vacío")
    .isInt()
    .withMessage("El tipo de dato del campo qty debe ser un número entero"),
  check("cartId", "Error en el campo cartId")
    .exists()
    .withMessage("El campo cartId es requerido como propiedad de la petición")
    .notEmpty()
    .withMessage("El campo cartId no debe estar vacío")
    .isInt()
    .withMessage("El tipo de dato del campo cartId debe ser un número entero"),
  validateResult,
];

const getProductsInCartValidator = [
  check("cartId", "Error en el campo cartId")
    .exists()
    .withMessage("El campo cartId es requerido como propiedad de la petición")
    .notEmpty()
    .withMessage("El campo cartId no debe estar vacío")
    .isInt()
    .withMessage("El tipo de dato del campo cartId debe ser un número entero"),
  validateResult,
];

module.exports = { addProductToCartValidator, getProductsInCartValidator };
