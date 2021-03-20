import express from 'express';
import routes from '../routes';
import { getSignUp, getSignIn, getHelp, getHome, getSignOut } from '../controllers/indexController';

const indexRouter = express.Router();

indexRouter.get(routes.home.single, getHome);
indexRouter.get(routes.signup.single, getSignUp);
indexRouter.get(routes.signin.single, getSignIn);
indexRouter.get(routes.signout.single, getSignOut);
indexRouter.get(routes.help.single, getHelp);

export default indexRouter;