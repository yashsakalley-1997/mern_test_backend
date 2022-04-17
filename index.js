const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

const connect = require("./configs/db");


// importing the controllers.
const blockController = require("./controllers/block.controller");
const managerController = require("./controllers/manager.controller");
const flatController = require("./controllers/flat.controller");
const residentController = require("./controllers/resident.controller");
const { register,login } = require("./controllers/authentication.controller")

app.use(express.json());
app.use(cors());


app.use("/block",blockController)
app.use("/manager",managerController)
app.use("/flats",flatController);
app.use("/residents",residentController);
app.use("/register",register);
app.use("/login",login);



app.listen(port,async ()=>{
    try{
        await connect()
        console.log("Listening on Port "+port)
    }
    catch(err){
        console.log(err.message)
    }
})