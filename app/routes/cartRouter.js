// const express = require("express");
// const authenticateToken = require("../middleware/authJwt");
// const finders = require("../middleware/verifySignUp");
// const User = require("../models/user");
// const res = require("express/lib/response");
// const Cart = require("../models/cart.model");
// const req = require("express/lib/request");
// const { append } = require("express/lib/response");
// const router = express.Router();


// //UPDATE ONE
// router.patch('/id',[authenticateToken,getProduct], async (req, res) => {
//     const user = await User.findById(req.body.user_id);
//     const inCart = user.cart.some(product => product_id == req.params.id)
   
//     let updatedUser;

//     if (inCart, async)  {
//     const product = user.cart.find((product) => product_id) == req.params.product_id
//     product_qty += req.body.qty
//     updatedUser = await user.save()
// } else {
//         user.cart.push ({...res.product, qty:res.body.qty})
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
//     updatedUser = await User.save()
// } else {
//     user.cart.push = product
// }

// fetch ('${product_id}/cart',{
//     METHOD: 'PUT',
//     body: ({
//         Qty: 10
//     }),
//     headers:{
//         'authorization': `bearer  ${localStorage.getItem('jwt')} `
    
//     },
// })
//     .then((res) => res.json())
//     .then((data)=> console.log(data));

// //Update

// function updateCart(i) {
//   let qty = document.querySelector(`#addQty${i}`).value;
//   cart[i] = {
//     ...cart[i],
//     qty,
//   };
//   localStorage.setItem("cart", JSON.stringify(cart));
//   readCart(cart);
// }

// //Delete
// function deleteFromCart(i) {
//   let confirmation = confirm("Are you sure you want to delete this item");
//   if (confirmation) {
//     cart.splice(i, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     readCart(cart);
//   }
// }

// //Checkout

// function Checkout(i) {
//   let total = cart
//     .reduce((total, products) => {
//       return total + products.price * products.qty;
//     }, 0)
//     .toFixed(2);
//   try {
//     if (parseInt(total) == 0) throw new Error("nothing in cart");
//     let confirmation = confirm(`Total payment needed: R${total}`);
//     if (confirmation) {
//       cart.length = 0;
//       localStorage.removeItem("cart");
//     }
//     readCart(cart);
//   } catch (err) {
//     alert(err);
//   }
// }

// module.exports = router;


const express = require("express");
const router = express.Router();

const Cart = require("../models/cart.model");
const Product = require("../models/product");

router.get("./cart/AddToCart/:id", function (req, res) {
  const productId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function (err, product) {
    if (err) {
      return res.redirect("/");
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect("/");
  });
});



router.get("/cart/remove/:id", function (req, res, next) {
  const productId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect("/cart");
});

router.get("/cart", function (req, res, next) {
  if (!req.session.cart) {
    return res.render("/cart", { products: null });
  }
  const cart = new Cart(req.session.cart);
  return res.render("shop/cart", {
    products: cart.generateArray(),
    totalPrice: cart.totalPrice,
  });
});

module.exports = router;