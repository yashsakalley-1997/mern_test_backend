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
        let req_obj = {}
        if(req.query.block_name){
            req_obj = {block_number:req.query.block_name}
        }
        const block = await Block.findOne(req_obj).lean().exec();
        return res.status(201).send(block);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

module.exports = router;
