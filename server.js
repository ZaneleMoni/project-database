require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(
  "mongodb+srv://zanelemoni:1A9yaTmTFa9gYLI5@zanelemoni.bqocf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open',() => console.log('Connected to Database'))

app.use(express.json())
const productsRouter = require('./routes/products')
app.use('/products', productsRouter)
app.listen(4000, () => console.log("Server Started"))