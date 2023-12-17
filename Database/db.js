const mongoose = require ('mongoose');

const connectDatabase = () => {
    console.log("conectando banco de dados")


    mongoose.connect("mongodb+srv://joaoferreira2001:joao123456@cluster0.25x9tpc.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true}
    ).then(()=>console.log("Mongodb Conectado")).catch((erro) => console.log(erro))

};

module.exports = { connectDatabase } ;
