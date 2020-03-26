import { Router } from 'express';
import CipherController from './app/controllers/CipherController';

const routes = new Router();

routes.get('/', CipherController.index);

export default routes;
