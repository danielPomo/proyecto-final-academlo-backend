const {
  createUser,
  logUser,
  editUser,
} = require("../repositories/user.repositories");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const transporter = require("../utils/mailer");
const { sendNewWelcomeMail } = require("../utils/sendNewWelcomeMail.js");

class UserServices {
  static async createNewUser({ username, email, password }) {
    try {
      const hashed = await bcrypt.hash(password, 10);
      return createUser({ username, email, password: hashed });
    } catch (error) {
      throw error;
    }
  }

  static async logNewUser({ email, password }) {
    try {
      const user = await logUser({ email, password });
      if (!user) {
        throw new Error("email does not exist");
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        throw new Error("The password is not correct");
      }
      const { id, username, avatar } = user;
      const userData = { id, username, email, avatar };
      const token = jwt.sign(userData, process.env.JWT_SECRET_WORD, {
        algorithm: "HS512",
        expiresIn: "2 days",
      });
      userData.token = token;
      return userData;
    } catch (error) {
      throw error;
    }
  }

  static async sendMail(email) {
    const { doc, attachments } = await sendNewWelcomeMail(email);
    transporter
      .sendMail({
        from: "danielnicolaspomo@gmail.com",
        to: email,
        subject: "Welcome to Ecommerce",
        text: "Welcome to Ecommerce",
        html: doc,
        attachments: attachments,
      })
      .then(() => console.log("Mensaje enviado"))
      .catch(() => console.log(error));
  }

  static async editUserInfo({ id, username, avatar }) {
    try {
      return editUser({ id, username, avatar });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
