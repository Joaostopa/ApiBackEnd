const jwt = require('jsonwebtoken');

module.exports = {
  autentifica: (req, res, next) => {
    let beartoken = req.headers['authorization'] || " "; // Usando 'authorization' em minúsculas
    let tokenArray = beartoken.split(" ");

    if (tokenArray[0] === 'Bearer' && tokenArray.length === 2) {
      let token = tokenArray[1];
      console.log('Token:', token);

      jwt.verify(token, 'chaveSecreta', (erro, objeto) => {
        if (erro) {
          res.status(401).json({ mensagem: "Senha/Token inválida" });
        } else {
          req.usuario = objeto.usuario;
          next();
        }
      });
    } else {
      res.status(401).json({ mensagem: "Formato de token inválido" });
    }
  }
};
