const express = require('express');
const app = express ();
const connectDatabase =('../database/db');

connectDatabase 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

RestRouter = require('./routes/Rest')
app.use('/rest',RestRouter)

UsuarioRouter = require('./routes/usuario')
app.use('/',UsuarioRouter)

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_doc')

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(5000, () =>{
  console.log("teste")
})
