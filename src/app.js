const express = require("express");
const apiRouter = require("./routes/index");
const errorRoutes = require("./routes/errorRoutes");
const cors = require("cors");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

apiRouter(app);
errorRoutes(app);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
