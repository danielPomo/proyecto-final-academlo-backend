const { Router } = require("express");
const router = Router();

const {
  createUser,
  logUser,
  editUser,
} = require("../controllers/user.controllers");

const {
  createUserValidator,
  logUserValidator,
  editUserValidator,
} = require("../validators/user.validators");

const authenticate = require("../middlewares/authentication.middleware");

router.post("/users", createUserValidator, createUser);
router.post("/users/login", logUserValidator, logUser);
router.put("/users/:id/profile", authenticate, editUserValidator, editUser);

module.exports = router;
