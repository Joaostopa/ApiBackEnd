const express = require('express');

const server = express();

server.use(express.json());

const futebol =['Time', 'Posicao', 'Numero'];

//Midd Global
server.use((req, res, next)=>{
  console.log(`Chamada: ${req.url}`);

  return next();
});

function checkFut(req,res,next){
  if(!req.body.name){
    return res.status(400).json({Erro: "Nome obrigatorio"});
  }

  return next();
}

function checkIndexFut(req, res, next){

  if(!futebol[req.params.index]){
    return res.status(400).json({Erro: "Inexistente"});
  }

  req.futebol = futebol;

  return next();
}

server.get('/futebol', (req, res) =>{
  return res.json(futebol);
})

server.get('/futebol/:index',  checkIndexFut, (req, res) =>{
  const { index } = req.params;
  
  return res.json(req.futebol);

})

//Criação 
server.post('/futebol', checkFut,(req,res) =>{
  const{ name } = req.body;
  futebol.push(name);

  return res.json(futebol);
})

//Alterando 
server.put('/futebol/:index', checkFut,  checkIndexFut, (req, res) =>{
  const { index } = req.params;
  const { name } = req.body;

  futebol[index] = name;

  return res.json(futebol);
});

//Deletando
server.delete('/futebol/:index',  checkIndexFut, (req, res)=>{
  const { index } = req.params;

  futebol.splice(index, 1);
  return res.json({mensagem: "Deletado com suceso!"});
})


server.listen(3000);
