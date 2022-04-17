const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
    manager_name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    block_managed:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"block",
        required:true,
    }
},
{
    versionKey:false
})

module.exports = mongoose.model("manager",managerSchema);
