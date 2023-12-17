require('dotenv').config()

const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.post("/usuario", (req, res) => {
    let { usuario, senha } = req.body;
    if (usuario && senha && usuario === senha) {
        let token = jwt.sign({ usuario: usuario }, 'chaveSecreta', { expiresIn: '30min' });
        res.json({ autenticado: true, token: token });
    } else {
        res.status(403).json({ autenticado: false, mensagem: 'Usuário ou senha inválidos!' });
    }
});

module.exports = router;
