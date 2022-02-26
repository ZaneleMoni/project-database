// require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
mongoose.connect("mongodb+srv://zanelemoni:1A9yaTmTFa9gYLI5@zanelemoni.bqocf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useNewUrlParser: true }
);
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open',() => console.log('Connected to Database'))

// app.use(bodyParser, urlencoded({
//   extended: true
// }))
// app.use(bodyParser.json())

app.use(express.json())
const productsRouter = require('./routes/products')
app.use('/products', productsRouter)

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

const cartRouter = require("./routes/cartRouter");
const { urlencoded } = require('body-parser')
app.use('/cart', cartRouter);

app.listen(7000, () => console.log("Server Started at port : 7000"))