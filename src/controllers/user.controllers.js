const UserServices = require("../services/user.services");
const CartServices = require("../services/cart.services");

const createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await UserServices.createNewUser({
      username,
      email,
      password,
    });
    await UserServices.sendMail(email);
    console.log("antes de crear cart en controller de user");
    const cart = await CartServices.createNewCart(user.id);
    console.log(cart);
    console.log("despues de crear cart en controller de user");
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
};

const logUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userData = await UserServices.logNewUser({ email, password });
    res.json(userData);
  } catch (error) {
    next(error);
  }
};

const editUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, avatar } = req.body;
    await UserServices.editUserInfo({
      id,
      username,
      avatar,
    });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser, logUser, editUser };