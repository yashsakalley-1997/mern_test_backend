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
    let query_obj = {};
    const page = req.query.page || 1;
    const size = req.query.size || 2;
    try{
        if(req.query.block){
            query_obj = {block:req.query.block}
        }
        else if(req.query.type){
            query_obj = {type:req.query.type}
        }
        else{
            query_obj = {};
        }
        const flat = await Flat.find(query_obj).populate("block","block_number").
        skip((page-1)*size).limit(size).lean().exec();
        return res.status(201).send(flat);
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err.message);
    }
})


router.get("/sort",async(req,res)=>{
    try{
        const flat = await Flat.find().populate("block","block_number")
        .sort({"flat_number":req.query.value}).lean().exec();
        return res.status(201).send(flat);
    }
    catch(err){
        console.log(err.message)
        return res.status(500).send(err.message);
    }
})
module.exports = router;