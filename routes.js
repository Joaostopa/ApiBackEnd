import { Router } from 'express';


import AcessoControle from './views/AcessoControle';
import JogadorControle from './views/JogadorControle';
import Dashboard from './views/Dashboard';

const routes = new Router();

routes.post('/jogadores', JogadorControle.store);

routes.post('/acessos', AcessoControle.store);
routes.get('/jogadores',JogadorControle.index);
routes.put('/jogadores/:jogador_id',JogadorControle.update);
routes.delete('/jogadores',JogadorControle.destroy);

routes.get('/dashboard',Dashboard.show);


export default routes;
