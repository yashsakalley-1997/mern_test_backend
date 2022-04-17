const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema({
    type:{type:String,required:true},
    block:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"block",
        required:true
    }
    ,
    flat_number:{
        type:Number,
        required:true,
        unique:true
    }
},
{
    versionKey:false
})


module.exports = mongoose.model("flat",flatSchema);



