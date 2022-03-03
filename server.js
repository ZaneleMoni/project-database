// require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));



const productsRouter = require("./app/routes/products.routes");
const usersRouter = require("./app/routes/users.routes");
const cartRouter = require("./app/routes/cart.routes");

app.use(express.json());
app.use(cors());
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/cart", cartRouter);

app.listen(process.env.PORT || 4070, () =>
  console.log("Server Started at port : 4070")
);
