const { User } = require("../models");

const createUser = async ({ username, email, password }) => {
  const user = await User.create({ username, email, password });

  return user;
};

const logUser = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email },
  });

  return user;
};

const editUser = async ({ id, username, avatar }) => {
  await User.update(
    { username, avatar },
    {
      where: { id },
    }
  );
};

const getUserEmail = async (userId) => {
  const userToSendEmail = await User.findByPk(userId);
  const { email } = userToSendEmail;
  return email;
};

module.exports = { createUser, logUser, editUser, getUserEmail };
