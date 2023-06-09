const { check } = require("express-validator");
const validateResult = require("../utils/validationResult");

const createUserValidator = [
  check("username", "Error en el campo username")
    .exists()
    .withMessage("El campo username es requerido como propiedad de la petición")
    .notEmpty()
    .withMessage("El campo username no debe estar vacío")
    .isString()
    .withMessage(
      "El tipo de dato del campo username debe ser una cadena de texto"
    )
    .isLength({ min: 6, max: 20 })
    .withMessage(
      "El campo username debe tener como mínimo 6 caracteres y como máximo 20"
    ),
  check("email", "Error en el campo email")
    .exists()
    .withMessage("El campo email es requerido como propiedad de la petición")
    .notEmpty()
    .withMessage("El campo email no debe estar vacío")
    .isEmail()
    .withMessage(
      "El tipo de dato del campo email debe ser una cadena de texto que coincida con el formato de una dirección de email"
    )
    .isLength({ min: 7, max: 255 })
    .withMessage(
      "El campo email debe tener como mínimo 7 caracteres y como máximo 255"
    ),
  check("password", "Error en el campo password")
    .exists()
    .withMessage("El campo password es requerido en la petición")
    .notEmpty()
    .withMessage("El campo password no puede estar vacío")
    .isString()
    .withMessage("El campo password debe ser una cadena de texto")
    .isLength({ min: 8, max: 20 })
    .withMessage("El campo password debe tener entre 8 y 20 caracteres"),
  validateResult,
];

const logUserValidator = [
  check("email", "Error en el campo email")
    .exists()
    .withMessage("El campo email es requerido como propiedad de la petición")
    .notEmpty()
    .withMessage("El campo email no debe estar vacío")
    .isEmail()
    .withMessage(
      "El tipo de dato del campo email debe ser una cadena de texto que coincida con el formato de una dirección de email"
    )
    .isLength({ min: 7, max: 255 })
    .withMessage(
      "El campo email debe tener como mínimo 7 caracteres y como máximo 255"
    ),
  check("password", "Error en el campo password")
    .exists()
    .withMessage("El campo password es obligatorio")
    .notEmpty()
    .withMessage("El campo password no puede estar vacío")
    .isString()
    .withMessage("El campo password debe ser una cadena de texto")
    .isLength({ min: 8, max: 20 })
    .withMessage("El campo password debe tener entre 8 y 20 caracteres"),
  validateResult,
];

const editUserValidator = [
  check("id", "Error en el campo id")
    .notEmpty()
    .withMessage("El campo id no debe estar vacío")
    .isInt()
    .withMessage("El tipo de dato del campo id debe ser un número entero"),
  check("username", "Error en el campo username")
    .optional()
    .exists()
    .withMessage("El campo username es requerido como propiedad de la petición")
    .notEmpty()
    .withMessage("El campo username no debe estar vacío")
    .isString()
    .withMessage(
      "El tipo de dato del campo username debe ser una cadena de texto"
    )
    .isLength({ min: 6, max: 20 })
    .withMessage(
      "El campo username debe tener como mínimo 6 caracteres y como máximo 20"
    ),
  check("avatar", "Error en el campo avatar")
    .optional()
    .notEmpty()
    .withMessage("El campo avatar no debe estar vacío")
    .isURL()
    .withMessage("El campo avatar debe ser una URL"),
  validateResult,
];

module.exports = { createUserValidator, logUserValidator, editUserValidator };
