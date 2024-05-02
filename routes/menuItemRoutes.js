const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

//Post method for adding a new menu item to the database

router.post('/', async(req,res)=>{
    try{

        const data = req.body
        const newMenu = newMenuItem(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(201).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

//Get method for menu items

router.get('/', async (req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

module.exports = router;