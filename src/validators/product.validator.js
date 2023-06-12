const { check } = require("express-validator");
const validateResult = require("../utils/validationResult");

const createProductValidator = [
  check("name", "Error en el campo name")
    .exists()
    .withMessage("El campo name es requerido como propiedad de la petición")
    .notEmpty()
    .withMessage("El campo name no debe estar vacío")
    .isString()
    .withMessage("El tipo de dato del campo name debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage(
      "El campo name debe tener como mínimo 6 caracteres y como máximo 255"
    ),
  check("description", "Error en el campo description")
    .exists()
    .withMessage(
      "El campo description es requerido como propiedad de la petición"
    )
    .notEmpty()
    .withMessage("El campo description no debe estar vacío")
    .isString()
    .withMessage(
      "El tipo de dato del campo description debe ser una cadena de texto"
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
      "El tipo de dato del campo price debe ser un número entrero o decimal que represente un precio, no requiere símbolo de moneda, no puede ser negativo, para separar los decimales se usa una coma, y debe especificar siempre dos dígitos decimales."
    ),
  check("availableQty", "Error en el campo availableQty")
    .exists()
    .withMessage(
      "El campo availableQty es requerido como propiedad de la petición"
    )
    .notEmpty()
    .withMessage("El campo availableQty no debe estar vacío")
    .isInt()
    .withMessage(
      "El tipo de dato del campo availableQty debe ser un número entero"
    ),
  check("userId", "Error en el campo userId")
    .exists()
    .withMessage("El campo userId es requerido como propiedad de la petición")
    .notEmpty()
    .withMessage("El campo userId no debe estar vacío")
    .isInt()
    .withMessage("El tipo de dato del campo userId debe ser un número entero"),
  check("productImage", "Error en el campo productImage")
    .optional()
    .notEmpty()
    .withMessage("El campo productImage no debe estar vacío")
    .isURL()
    .withMessage("El tipo de dato del campo productImage debe ser una URL"),
  validateResult,
];

const editProductValidator = [
  check("name", "Error en el campo name")
    .exists()
    .withMessage("El campo name es requerido como propiedad de la petición")
    .notEmpty()
    .withMessage("El campo name no debe estar vacío")
    .isString()
    .withMessage("El tipo de dato del campo name debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage(
      "El campo name debe tener como mínimo 6 caracteres y como máximo 255"
    ),
  check("description", "Error en el campo description")
    .exists()
    .withMessage(
      "El campo description es requerido como propiedad de la petición"
    )
    .notEmpty()
    .withMessage("El campo description no debe estar vacío")
    .isString()
    .withMessage(
      "El tipo de dato del campo description debe ser una cadena de texto"
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
  check("id", "Error en el campo id")
    .exists()
    .withMessage("El campo id es requerido como propiedad de la petición")
    .notEmpty()
    .withMessage("El campo id no debe estar vacío")
    .isInt()
    .withMessage("El tipo de dato del campo id debe ser un número entero"),
  check("productImage", "Error en el campo productImage")
    .optional()
    .notEmpty()
    .withMessage("El campo productImage no debe estar vacío")
    .isURL()
    .withMessage("El tipo de dato del campo productImage debe ser una URL"),
  check("status", "Error en el campo status")
    .optional()
    .notEmpty()
    .withMessage("El campo status no debe estar vacío")
    .isString()
    .withMessage(
      "El tipo de dato del campo status debe ser una cadena de texto"
    ),
];

module.exports = {
  createProductValidator,
  editProductValidator,
};
