const express = require('express');
const { route } = require('.');
const { render } = require('../app');
const router = express.Router();

const pets =[ 'gato','carroro','lebre','dino','retão']


router.get("/",(req,res)=>{
    res.render('logi')
})

router.get("/cadastrar",(req,res)=>{
    res.render('cadastro')
})



module.exports= router