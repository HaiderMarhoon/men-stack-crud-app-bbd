const express = require("express")
const router = express.Router()
const Business = require('../models/business')

//test
router.get("/" ,(req,res) =>{
    res.send("do i work?")
})

//add route
router.get("/new", (req,res) =>{
    res.render("businesses/new.ejs")
})

//post from data to db
router.post("/" , async (req,res) =>{
    if(req.body.isVerified === "on"){
        req.body.isVerified = true
    }
    else{
        req.body.isVerified = false
    }
    console.log(req.body)
    await Business.create(req.body)
    res.redirect("/business/new")
})



module.exports = router