const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User =mongoose.model('[User]')

router.get('/', (req, res) => {
    res.router("user/addOrEdit", {
        viewTitle: "Insert User"
    })
})
router.post('/', (req, res) => {
    insertRecord(req,res)
})
function insertRecord(req, res) {
    let user = new User()
    user_fullname = req.body.user_fullname;
    email = req.body.email;
    phone_number = req.body.phone_number;
    user.save((err, doc) => {
        if (error)
            res.redirect('user/list');
        else {
            console.log('Error during record insertion')
              }
        
    });
}

router.get('/list', (req, res) => { 
    res.json('from list');
})
module.exports = router