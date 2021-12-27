const express = require('express');
const router = express.Router();

const servicos =[ {
    id:'0',
    nome:'banho',
    valor:"150"},
{ id:'1',
 nome:'tosa',
 valor:"40"
},

{ id:'2',
  nome:'tira carrapato',
  valor:"30"
},
{ id:'3',
  nome:'pintura',
  valor:"25"
},
{ id:'4',
  nome:'vachina',
  valor:"80"
}

]






router.get("/",(req,res)=>{
    res.render('servisos',{servicos:servicos})

})

router.get('/:idservico',(req,res)=>{
        
      const {idservico} =req.params
      const servico= servicos.find(function (servico){
          return servico.id == idservico
      })


    res.render('servisos',servico)
    
})



module.exports= router