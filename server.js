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
app.use('/products', productsRouter)

const usersRouter = require("./app/routes/users");
app.use("/users", usersRouter);
const cartRouter = require("./app/routes/cartRouter");
const user = require('./app/models/user')
app.use('/cart', cartRouter);

app.listen(process.env.PORT || 8008, () =>
  console.log("Server Started at port : 8008")
);