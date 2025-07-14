const express = require("express")
const router = express.Router()
const Business = require('../models/business')

//Index
router.get("/", async (req, res) => {
    const allBusinesses = await Business.find()
    console.log(`all Businesses ${allBusinesses}`)
    res.render("businesses/index.ejs", { allBusinesses: allBusinesses })
})

//add route
router.get("/new", (req, res) => {
    res.render("businesses/new.ejs")
})

//post from data to db
router.post("/", async (req, res) => {
    if (req.body.isVerified === "on") {
        req.body.isVerified = true
    }
    else {
        req.body.isVerified = false
    }
    console.log(req.body)
    await Business.create(req.body)
    res.redirect("/businesses")
})




module.exports = router