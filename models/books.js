const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "category":String,
        "author":String,
        "price":String
    }
)

let booksmodel=mongoose.model("books",schema);
module.exports={booksmodel}

