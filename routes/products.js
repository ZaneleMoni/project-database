const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const Product = require('../models/product')

//getting all
router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
        
  }
})
//getting one
router.get("/:id", getProduct, (req, res) => {
res.json(res.product.name)
})

  //creating one
  router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//updating one
router.patch("/:id", getProduct, async (req, res) => {
    if (req.body.name != null) {
        res.product.name = req.body.name
    }
      if (req.body.title != null) {
        res.product.title = req.body.title;
      }
    if (req.body.price != null) {
      res.product.price = req.body.price;
    }
    if (req.body.description != null) {
      res.product.description = req.body.title;
    } try {
        const updatedProduct = await res.product.save()
        res.json(updatedProduct)
    } catch (error) {
      res.status(400).json({mesage:error.message})

    }
})

//deleting one
router.delete("/:id",getProduct, async (req, res) => {
    try {
        await res.product.remove()
        res.json({ message: 'product successfully deleted' })
    } catch (error) {
        res.status(500).json({message: error.message})
      }
})
    async function getProduct(req, res, next) {
        let product
        try {
            product = await Product.findById(req.params.id)
            if (product == null)
                return res.status(404).json({ message: "cannot find product" })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
        res.product = product
        next()
    }
module.exports = router