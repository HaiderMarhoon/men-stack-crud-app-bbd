const express = require("express")

const app =express()

//get  /(home)
app.get("/" , (req,res) =>{
    res.send("Hi")
})
app.listen(3000 ,()=>{
    console.log('listening on port 3000')
})