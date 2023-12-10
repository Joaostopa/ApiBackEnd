import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserControle from './app/controles/UserControle';
import SessaoControle from './app/controles/SessaoControle';

const routes = new Router();

routes.post('/users', UserControle.store);

routes.post('/sessoes', SessaoControle.store);

routes.use(authMiddleware);

routes.put('/users', UserControle.update);


export default routes;