const express = require("express");
const res = require("express/lib/response");
const user = require("../models/user");
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
res.json(res.user);

})

router.post("/signup", async (req, res) => {
  
  try {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const user = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      password: hashedPassword,
      phone_number: req.body.phone_number,
    })       
    const newUser = await user.save()
    res.status(201).json(newUser)
    console.log(salt)
    console.log(hashedPassword)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

router.post("/signin", async (req, res) => {
  try {
    user.findOne({ fullname: req.body.fullname }, (err, customer) => {
      if (error) return handleError(error);
      if (!customer) {
        return res.status(404).send({ message: "User not found" });
      }
      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        customer.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({message: "invalid password" })
      }
   })
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
