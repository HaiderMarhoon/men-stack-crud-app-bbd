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

//Show one business
router.get("/:businessId", async (req, res) => {
    const findBusiness = await Business.findById(req.params.businessId)
    res.render('businesses/show.ejs', { findBusiness: findBusiness })
})

router.delete("/:businessId", async (req, res) => {
    await Business.findByIdAndDelete(req.params.businessId)
    res.redirect("/businesses")
})

router.get('/:businessId/edit', async (req, res) => {
	const foundBusiness = await Business.findById(req.params.businessId);
    res.render("businesses/edit.ejs", {foundBusiness:foundBusiness})
	console.log(foundBusiness);
});

router.put("/:businessId",async(req,res) =>{
        if (req.body.isVerified === "on") {
        req.body.isVerified = true
    }
    else {
        req.body.isVerified = false
    }
    console.log(req.body)
    await Business.findByIdAndUpdate(req.params.businessId, req.body)
    res.redirect(`/businesses/${req.params.businessId}`)
})

module.exports = router