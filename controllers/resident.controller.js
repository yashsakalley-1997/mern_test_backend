const express = require("express");
const Resident = require("../models/resident.model");

const router = express.Router();


router.post("",async(req,res)=>{
    try{
        const resident = await Resident.create(req.body);
        return res.status(201).send(resident)
    }   
    catch(err){
        return res.status(500).send(err.message)
    }
})


router.get("",async(req,res)=>{
    try{
        let req_obj = {};
        if(req.query.id){
            req_obj = {flat:req.query.id}
        }
        const resident = await Resident.find(req_obj).lean().exec();
        return res.status(201).send(resident)
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err.message)
    }
})

module.exports = router;