const {
  createOrder,
  getAllOrdersByUser,
  setOrderStatusAsCompleted,
} = require("../repositories/order.repositories");
const {
  selectProductsToMoveToProductsInOrder,
  setProductStatusAsPurchased,
} = require("../repositories/productincart.repositories");

const {
  moveProducts,
  updateStock,
} = require("../repositories/productsinorder.repositories");

const { checkout, findCartId } = require("../repositories/cart.repositories");

const { getUserEmail } = require("../repositories/user.repositories");

const { sendPurchaseEmail } = require("../utils/sendNewWelcomeMail");

const transporter = require("../utils/mailer");

class OrderServices {
  static async createNewOrder(userId) {
    try {
      return createOrder(userId);
    } catch (error) {
      throw error;
    }
  }

  static async selectProductsToMove(cartId) {
    try {
      return selectProductsToMoveToProductsInOrder(cartId);
    } catch (error) {
      throw error;
    }
  }

  static async moveProductsToProductInOrder(orderId, productsToMove) {
    try {
      const normalizedProductsToMove = productsToMove.map((product) => {
        const { productId, qty, price } = product;
        return { productId, qty, price };
      });
      for (let product of normalizedProductsToMove) {
        moveProducts({ orderId, ...product });
      }
    } catch (error) {
      throw error;
    }
  }

  static async setProductAsPurchased(orderId) {
    try {
      await setOrderStatusAsCompleted(orderId);
      return await setProductStatusAsPurchased(orderId);
    } catch (error) {
      throw error;
    }
  }

  static async getAllOrders(userId) {
    try {
      return await getAllOrdersByUser(userId);
    } catch (error) {
      throw error;
    }
  }

  static async buyCart(userId) {
    try {
      const cartId = await findCartId(userId);
      await checkout(cartId);
      const email = await getUserEmail(userId);
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

  static async updateProductAvailableQty(orderId) {
    try {
      updateStock(orderId);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderServices;
