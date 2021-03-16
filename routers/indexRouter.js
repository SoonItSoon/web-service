import express from 'express';
import routes from '../routes';
import { getJoin, getLogin, help, home, logout } from '../controllers/indexController';

const indexRouter = express.Router();

indexRouter.get(routes.home.single, home);
indexRouter.get(routes.join.single, getJoin);
indexRouter.get(routes.login.single, getLogin);
indexRouter.get(routes.logout.single, logout);
indexRouter.get(routes.help.single, help);

export default indexRouter;