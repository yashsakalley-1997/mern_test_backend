const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
    "manager_name":{type:String,required:true,unique:true},
    "block":{
        type:mongoose.Schema.Types.ObjectId,
        ref:"block",
        required:true
    }
},
{
    versionKey:false
})

module.exports = mongoose.model("manager",managerSchema);
