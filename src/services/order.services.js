const {
  createOrder,
  getAllOrdersByUser,
} = require("../repositories/order.repositories");
const {
  selectProductsToMoveToProductsInOrder,
  setProductStatusAsPurchased,
} = require("../repositories/productincart.repositories");

const {
  moveProducts,
} = require("../repositories/productsinorder.repositories");

const { checkout, findCartId } = require("../repositories/cart.repositories");

const { getUserEmail } = require("../repositories/user.repositories");

const { sendPurchaseEmail } = require("../utils/sendNewWelcomeMail");

const transporter = require("../utils/mailer");

class OrderServices {
  static async createNewOrder(data) {
    try {
      // crear la orden en el repositorio
      return createOrder(data);
    } catch (error) {
      throw error;
    }
  }

  static async selectProductsToMove(cartId) {
    try {
      console.log("order services linea 22");
      return selectProductsToMoveToProductsInOrder(cartId);
    } catch (error) {
      throw error;
    }
  }

  static async moveProductsToProductInOrder(orderId, productsToMove) {
    try {
      console.log("order services linea 31");
      const normalizedProductsToMove = productsToMove.map((product) => {
        const { productId, qty, price } = product;
        return { productId, qty, price };
      });
      console.log("order services linea 36");
      console.log(normalizedProductsToMove);
      for (let product of normalizedProductsToMove) {
        moveProducts({ orderId, ...product });
      }
    } catch (error) {
      throw error;
    }
  }

  static async setProductAsPurchased(userId) {
    try {
      console.log("desde order services linea 60");
      await setProductStatusAsPurchased(userId);
    } catch (error) {
      throw error;
    }
  }

  static async getAllOrders(userId) {
    try {
      console.log("miny");
      return await getAllOrdersByUser(userId);
    } catch (error) {
      throw error;
    }
  }

  static async buyCart(userId) {
    try {
      // buscar el id del carro del usuario
      console.log("desde order services linea 79");
      const cartId = await findCartId(userId);
      // hace el checkout
      console.log("entrando a hacer el checkout order services linea 82");
      await checkout(cartId);
      // enviar mail de confirmacion
      console.log("order services linea 85");
      const email = await getUserEmail(userId);
      console.log(email);
      console.log(`sending email to ${email} desde order services linea 88`);
      const { doc, attachments } = await sendPurchaseEmail(email);
      transporter
        .sendMail({
          from: "danielnicolaspomo@gmail.com",
          to: email,
          subject: "Purchase Confirmation",
          text: "Purchase Confirmation",
          html: doc,
          attachments: attachments,
        })
        .then(() => console.log("Mensaje enviado"))
        .catch((error) => console.log(error));
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderServices;
