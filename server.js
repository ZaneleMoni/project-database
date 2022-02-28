require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open',() => console.log('Connected to Database'))

app.use(express.json())
const productsRouter = require('./app/routes/products')
const usersRouter = require("./app/routes/users");
const cartRouter = require("./app/routes/cartRouter");
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/cart", cartRouter);




app.listen(process.env.PORT || 7003, () =>
  console.log("Server Started at port : 7003")
);