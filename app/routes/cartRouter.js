const express = require('express')
const authenticateToken = require('../middleware/authJwt')
const finders = require('../middleware/verifySignUp')
const User = require('../models/user')
const res = require("express/lib/response");
const Cart = require("../models/cart.model");
const req = require('express/lib/request');
const router = express.Router();

  

// router.put('/id',{authenticateToken,getProduct}, async (req, res) => {
//     const user = await User.findById.req.user_id;
//     const inCart = user.cart.send (product) => product_id == req.params.id
//     let updatedUser;
//     if (inCart, async)  {
//     const product = user.cart.find((product) => product_id) == req.params.product_id
//     product_qty *= req.body.qty
//     updatedUser = await user.save()
// } else {
//         user.cart.push = {...res.product.qty : res.body.qty}
//     updatedUser = await user.save()
        
// }
//     res.send
// })

// router.get('/', (req, res) => {
//     return res.send(400).json
// })
// if (inCart, async)  {
//     const product = user.cart.find((product) => product_id) == req.params.product_id
//     product_qty *= req.body.qty
//     updatedUser = await user.save()
// } else {
//     user.cart.push = product
// }

// fetch ('/cart'${product_id},{
//     METHOD: PUT,
//     Headers:
//         authorization: `Bearer  ${localStorage.getItem(jwt)} `
//     body: {
//         Qty: 10
//     }
//     }.then.res => res.json())
//     .then.data => {
    
//     }
// })
module.exports = router