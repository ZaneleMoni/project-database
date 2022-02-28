const express = require('express')
const authenticateToken = require('../middleware/authJwt')
const finders = require('../middleware/verifySignUp')
const User = require('../models/user')
const res = require("express/lib/response");
const Cart = require("../models/cart.model");
const req = require('express/lib/request');
const router = express.Router();

  

router.put('/', (req, res) => {
    res.send
})
router.get('/', (req, res) => {
    return res.send(400).json
})
// if (inCart, async)  {
//     const product = user.cart.find((product) => product_id) == req.params.product_id
//     product_qty *= req.body.qty
//     updatedUser = await user.save()
// } else {
//     user.cart.push =
// }

// fetch ('/cart'/${product_id},{
//     METHOD: PUT,
//     Headers:
//     authorization: `Bearer  $ `
// })
module.exports = router