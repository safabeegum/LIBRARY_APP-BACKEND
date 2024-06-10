const express= require("express")
const mongoose= require("mongoose")
const cors= require("cors")
const books=require("./models/books")

const app=express()
app.use(cors())

app.get("/",(req,res) => {
    res.send("Hello")
})

app.post("/add",(req,res) => {
    res.send("Welcome to my Add Page")
})


app.post("/search",(req,res) => {
    res.send("Search Page")
})

app.post("/delete",(req,res) => {
    res.send("Delete Page")
})

app.get("/view",(req,res) => {
    res.send("View Page")
})

app.listen(8080,() => {
    console.log("server started")
})