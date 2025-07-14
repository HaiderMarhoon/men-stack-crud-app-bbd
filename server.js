const dotenv = require("dotenv").config();

const express = require("express")
const mongoose = require("mongoose");

const app =express()
const path = require("path");

// Controllers
const businessController = require("./controllers/businessControllers")


//db connection
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected",()=>{
    console.log(`Connected to MangoDB ${mongoose.connection.name} `)
} )

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:false}))

// route the index
app.get("/", async (req, res) => {
  res.render("index.ejs");
});

// Routes
app.use("/businesses", businessController)

app.listen(3000 ,()=>{
    console.log('listening on port 3000')
})