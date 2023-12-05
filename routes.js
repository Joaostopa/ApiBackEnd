import { Router }  from  'express';

import AcessoControle from './views/AcessoControle';
import JogadorControle from './views/JogadorControle';

const routes = new Router();

routes.post('/comissao', AcessoControle.store)

routes.post('/jogador', JogadorControle.store)

export default routes;
