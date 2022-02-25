const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const User = require("../models/user");


router.get("/", async (req, res) => {
      try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
        
  }
})

router.get("/:id", (req, res) => {
res.json(res.user.name);

});

router.post("/", async (req, res) => {
    const user = new User({
         user_id: req.body.id,
        user_fullname: req.body.name,
        email: req.body.email,
        password: req.body.email,
        phone_number: req.body.phone_number,
        join_date: req.body.join_date,
        cart: req.body.cart,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/", async (req, res) => { 
     if (req.body.fullname != null) {
        res.user.fullname = req.body.fullnamename
    }
      if (req.body.email != null) {
        res.user.email = req.body.email;
      }
    if (req.body.password != null) {
      res.user.password = req.body.password;
    }
    if (req.body.phone_number != null) {
      res.user.phone_number = req.body.phone_number;
    }
  if (req.body.join_date != null) {
         res.user.join_date = req.body.join_date;
       } try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (error) {
      res.status(400).json({mesage:error.message})

    }
});

router.put("/:id", async (req, res) => { });

router.delete("/:id",getUser, async (req, res) => { 
        try {
        await res.user.remove()
        res.json({ message: 'user successfully deleted' })
    } catch (error) {
        res.status(500).json({message: error.message})
      }
})
    async function getUser(req, res, next) {
        let user
        try {
            user = await User.findById(req.params.id)
            if (user == null)
                return res.status(404).json({ message: "cannot find user" })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
        res.user = user
        next()
    }


router.get("/:id/cart", (req, res) => { 

});
router.post("/:id/cart", (req, res) => {});
router.put("/:id/cart", (req, res) => {});
router.delete("/:id/cart", (req, res) => {});

module.exports = router;
