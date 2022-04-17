const mongoose = require("mongoose");
const connect = ()=>{
    return mongoose.connect(
        "mongodb+srv://root:root@cluster0.8iob7.mongodb.net/housing_society_app"
    )
}

module.exports = connect;
