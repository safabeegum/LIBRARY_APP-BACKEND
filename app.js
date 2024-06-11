const express= require("express")
const mongoose= require("mongoose")
const cors= require("cors")
const {bookmodel}=require("./models/books")

const app=express()
app.use(cors())
app.use(express.json())

//mongodb connection
mongoose.connect("mongodb+srv://safabeegum:mongodb24@cluster0.pbzbbey.mongodb.net/librarydb?retryWrites=true&w=majority&appName=Cluster0")


app.get("/",(req,res) => {
    res.send("Hello")
})

app.post("/add",(req,res) => {
    let input = req.body
    let book=new bookmodel(input)
    book.save()
    res.json({status:"success"})

})


app.post("/search",(req,res) => {
    res.send("Search Page")
})

app.post("/delete",(req,res) => {
    res.send("Delete Page")
})

app.get("/view",(req,res) => {
    bookmodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    )
})

app.listen(8081,() => {
    console.log("server started")
})