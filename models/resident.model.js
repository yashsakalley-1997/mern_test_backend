const mongoose = require("mongoose");

const residentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    gender:{type:String,required:true},
    age:{type:Number,required:true},
    flat:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"flat",
        required:true
    }
},{
    versionKey:false
})

module.exports = mongoose.model("resident",residentSchema);


// Resident.
// 1. Name.
// 2. Gender.
// 3. Age.
// 4. Flat.
