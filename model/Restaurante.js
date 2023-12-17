let ids = 0;
let restauranteItens = [];

module.exports = {
    salvar(nome, produto, validade, preco) {
        let obj = { id: ++ids, nome: nome, produto: produto, validade: validade, preco: preco };
        restauranteItens.push(obj);
        return obj;
    },
    atualizar(id, nome, produto, validade, preco) {
        let pos = this.obterPosicaoPorId(id);
        if (pos >= 0) {
            let obj = { id: parseInt(id), nome: nome, produto: produto, validade: validade, preco: preco };
            restauranteItens[pos] = obj;
            return restauranteItens[pos];
        }
        return null;
    },
    listar() {
        return restauranteItens;
    },
    listarPorNome(nome) {
        let lista = [];
        for (let i = 0; i < restauranteItens.length; i++) {
            if (restauranteItens[i].nome.toUpperCase().startsWith(nome.toUpperCase())) {
                lista.push(restauranteItens[i]);
            }
        }
        return lista;
    },
    listarPorProduto(produto) {
        let lista = [];
        for (let i = 0; i < restauranteItens.length; i++) {
            if (restauranteItens[i].produto == produto) {
                lista.push(restauranteItens[i]);
            }
        }
        return lista;
    },
    listarPorDataValidade(dataValidade) {
        let lista = [];
        for (let i = 0; i < restauranteItens.length; i++) {
            if (restauranteItens[i].validade === dataValidade) {
                lista.push(restauranteItens[i]);
            }
        }
        return lista;
    },
    obterElementoPorId(id) {
        let pos = this.obterPosicaoPorId(id);
        if (pos >= 0) {
            return restauranteItens[pos];
        }
        return null;
    },
    obterPosicaoPorId(id) {
        for (let i = 0; i < restauranteItens.length; i++) {
            if (restauranteItens[i].id == id) {
                return i;
            }
        }
        return -1;
    },
    excluir(id) {
        let i = this.obterPosicaoPorId(id);
        if (i >= 0) {
            restauranteItens.splice(i, 1);
            return true;
        }
        return false;
    }
};
