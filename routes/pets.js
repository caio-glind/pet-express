const express = require('express');
const { route } = require('.');
const router = express.Router();

const pets =[ 'gato','carroro','lebre','dino','retão']


router.get("/",(req,res)=>{
    res.send(pets)
})

router.get('/:id',(req,res)=>{
    res.send(pets[req.params.id])
    
})

module.exports= router