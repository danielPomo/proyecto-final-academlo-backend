const ejs = require("ejs");
const path = require("path");

const sendNewWelcomeMail = async (email) => {
  const filePath = path.join(__dirname, "../views/welcomeMail.ejs");

  const doc = await ejs.renderFile(filePath, email);

  const attachments = [
    {
      filename: "bee.png",
      path: path.join(__dirname, "../views/images/bee.png"),
      cid: "image1@nodemailer.com",
    },
    {
      filename: "Bottom-Promo.png",
      path: path.join(__dirname, "../views/images/Bottom-Promo.png"),
      cid: "image2@nodemailer",
    },
    {
      filename: "box.png",
      path: path.join(__dirname, "../views/images/box.png"),
      cid: "image3@nodemailer.com",
    },
    {
      filename: "discount.png",
      path: path.join(__dirname, "../views/images/discount.png"),
      cid: "image4@nodemailer.com",
    },
    {
      filename: "facebook2x.png",
      path: path.join(__dirname, "../views/images/facebook2x.png"),
      cid: "image5@nodemailer.com",
    },
    {
      filename: "Header.png",
      path: path.join(__dirname, "../views/images/Header.png"),
      cid: "image6@nodemailer.com",
    },
    {
      filename: "instagram2x.png",
      path: path.join(__dirname, "../views/images/instagram2x.png"),
      cid: "image7@nodemailer.com",
    },
    {
      filename: "location.png",
      path: path.join(__dirname, "../views/images/location.png"),
      cid: "image8@nodemailer.com",
    },
    {
      filename: "pinterest2x.png",
      path: path.join(__dirname, "../views/images/pinterest2x.png"),
      cid: "image9@nodemailer.com",
    },
    {
      filename: "polygon.png",
      path: path.join(__dirname, "../views/images/polygon.png"),
      cid: "image10@nodemailer.com",
    },
    {
      filename: "product_example.png",
      path: path.join(__dirname, "../views/images/product_example.png"),
      cid: "image11@nodemailer.com",
    },
    {
      filename: "snapchat2x.png",
      path: path.join(__dirname, "../views/images/snapchat2x.png"),
      cid: "image12@nodemailer.com",
    },
    {
      filename: "team.png",
      path: path.join(__dirname, "../views/images/team.png"),
      cid: "image13@nodemailer.com",
    },
    {
      filename: "Top-Promo.png",
      path: path.join(__dirname, "../views/images/Top-Promo.png"),
      cid: "image14@nodemailer.com",
    },
    {
      filename: "transport.png",
      path: path.join(__dirname, "../views/images/transport.png"),
      cid: "image15@nodemailer.com",
    },
  ];
  return { doc, attachments };
};

const sendPurchaseEmail = async (email) => {
  const filePath = path.join(__dirname, "../views/purchaseEmail.ejs");

  const doc = await ejs.renderFile(filePath, email);

  const attachments = [
    {
      filename: "bee.png",
      path: path.join(__dirname, "../views/purchase-images/bee.png"),
      cid: "img1@nodemailer.com",
    },
    {
      filename: "First_Image-peace-girl.png",
      path: path.join(
        __dirname,
        "../views/purchase-images/First_Image_peace_girl.png"
      ),
      cid: "img2@nodemailer",
    },
    {
      filename: "offer.png",
      path: path.join(__dirname, "../views/purchase-images/offer.png"),
      cid: "img3@nodemailer.com",
    },
  ];
  return { doc, attachments };
};

module.exports = { sendNewWelcomeMail, sendPurchaseEmail };
