const express = require("express");
const Flat = require("../models/flat.model");
const router = express.Router();

router.post("",async(req,res)=>{
    try{
        const flat = await Flat.create(req.body);
        return res.status(201).send(flat)
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})


router.get("",async(req,res)=>{
    try{
        const flat = await Flat.find().lean().exec();
        return res.status(201).send(flat);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

module.exports = router;