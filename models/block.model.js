const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema({
    block_number:{type:String,required:true,unique:true}
})


const Block = mongoose.model("block",blockSchema);
module.exports = Block;
