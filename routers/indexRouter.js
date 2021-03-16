import express from 'express';
import routes from '../routes';
import { getJoin, getLogin, home, logout } from '../controllers/indexController';

const globalRouter = express.Router();

globalRouter.get(routes.home.single, home);
globalRouter.get(routes.join.single, getJoin);
globalRouter.get(routes.login.single, getLogin);
globalRouter.get(routes.logout.single, logout);

export default globalRouter;