const { User } = require("../models");

const createUser = async ({ username, email, password }) => {
  const user = await User.create({ username, email, password });
  console.log("despues del repo");
  return user;
};

const logUser = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email },
  });
  console.log("despues del repo de log user");
  console.log(user);
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
  console.log("desde user repositories linea 28");
  const userToSendEmail = await User.findByPk(userId);
  const { email } = userToSendEmail;
  console.log(
    `El email se enviara a ${email} desde user repositories linea 31`
  );
  return email;
};

module.exports = { createUser, logUser, editUser, getUserEmail };
