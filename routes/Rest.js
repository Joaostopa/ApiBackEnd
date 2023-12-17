require('dotenv').config()
const express = require('express');
const router = express.Router();

const Autentificacao = require ('../utilitarios/Autentificacao')
const RestauranteModel = require('../model/Restaurante')

router.get('/', (req, res) => {
    let list = RestauranteModel.list();
    
    if (req.query.nome) {
        list = RestauranteModel.listByNome(req.query.nome);
    } else if (req.query.produto) {
        list = RestauranteModel.listByProduto(req.query.produto);
    } else if (req.query.dataValidade) {
        list = RestauranteModel.listByDataValidade(req.query.dataValidade);
    }
      else if (req.query.preco) {
        list = RestauranteModel.listByDataValidade(req.query.preco);

    }

    res.json({ count: list.length, lista: list });
});

router.get('/:id', (req, res) => {
    let obj = RestauranteModel.obterElementoPorId(req.params.id);
    if (obj) {
        res.json({ obj: obj });
    } else {
        res.status(404).json({ mensagem: "ID não encontrado no restaurante" });
    }
});

router.post('/', Autentificacao.autentifica, (req, res) => {
    let { nome, produto, validade, preco } = req.body;
    if (nome && produto && validade && preco) {
        let obj = RestauranteModel.salvar(nome, produto, validade, preco);
        res.json({ mensagem: "Item adicionado ao cardápio do restaurante", obj: obj });
    } else {
        res.status(400).json({ mensagem: "Falha ao adicionar novo item ao cardápio" });
    }
});

router.put('/:id', Autentificacao.autentifica, (req, res) => {
    let { nome, produto, validade, preco } = req.body;
    let id = req.params.id;
    if (id && nome && produto && validade && preco) {
        let obj = RestauranteModel.atualizar(id, nome, produto, validade, preco);
        if (obj) {
            res.json({ mensagem: "Item do cardápio atualizado", obj: obj });
        } else {
            res.status(400).json({ mensagem: "ID não encontrado no restaurante" });
        }
    } else {
        res.status(400).json({ mensagem: "Falha ao atualizar item do cardápio" });
    }
});

router.delete('/:id', Autentificacao.autentifica, (req, res) => {
    let id = req.params.id;
    if (RestauranteModel.excluir(id)) {
        res.json({ mensagem: "Item do cardápio excluído com sucesso" });
    } else {
        res.status(400).json({ mensagem: "Falha ao excluir item do cardápio" });
    }
});

module.exports = router;
