const express = require("express")

const app =express()
const path = require("path");

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));

// route the index
app.get("/", async (req, res) => {
  res.render("index.ejs");
});



app.listen(3000 ,()=>{
    console.log('listening on port 3000')
})