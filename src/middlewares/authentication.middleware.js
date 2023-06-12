const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const retrievedToken = req.headers["access-token"];
    if (!retrievedToken) {
      return next({
        status: 401,
        name: "No token retrieved",
        message: "The access-token is not being provided in request's headers",
      });
    }
    const decodedToken = jwt.verify(
      retrievedToken,
      process.env.JWT_SECRET_WORD,
      {
        algorithms: "HS512",
      }
    );
    req.user = decodedToken;
    next();
  } catch (error) {
    next({
      status: 498,
      name: "Invalid or expired token",
      message: error,
    });
  }
};

module.exports = authenticate;
