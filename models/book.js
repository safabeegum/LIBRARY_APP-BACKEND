const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "category":String,
        "author":String,
        "price":String
    }
)

let bookmodel=mongoose.model("book",schema);
module.exports={studentmodel}

