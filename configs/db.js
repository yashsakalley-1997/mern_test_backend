const mongoose = require("mongoose");
require("dotenv").config()
const connection_string = process.env.connection_string || "mongodb+srv://root:root@cluster0.8iob7.mongodb.net/housing_society_app";

const connect = ()=>{
    return mongoose.connect(
        connection_string
    )
}

module.exports = connect;
