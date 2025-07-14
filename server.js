const dotenv = require("dotenv").config();

const express = require("express")
const mongoose = require("mongoose");

const app =express()
const path = require("path");
//db connection
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected",()=>{
    console.log(`Connected to MangoDB ${mongoose.connection.name} `)
} )

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));

// route the index
app.get("/", async (req, res) => {
  res.render("index.ejs");
});



app.listen(3000 ,()=>{
    console.log('listening on port 3000')
})