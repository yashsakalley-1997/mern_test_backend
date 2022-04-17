const express = require("express");
const Block = require("../models/block.model");
const router = express.Router();

router.post("", async (req,res)=>{
    try{
        const block = await Block.create(req.body);
        return res.status(201).send(block)
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})


router.get("",async (req,res)=>{
    try{
        const block = await Block.find().lean().exec();
        return res.status(201).send(block);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

module.exports = router;
