const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,required:true},
        "category":{type:String,required:true},
        "author":{type:String,required:true},
        "price":{type:String,required:true}
    }
)

let bookmodel=mongoose.model("books",schema);
module.exports={bookmodel}

