import express from 'express';
// Middlewares
import cokieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import localsMiddleware from './localsMiddleware';
// Routers
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
// Routes
import routes from './routes';

const app = express();
// Set View Engine
app.set('view engine', 'pug');
// Use Middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());   // secure
app.use(morgan('dev')); // logger
app.use(localsMiddleware);

// Use Routers
app.use(routes.home.single, globalRouter);
app.use(routes.users.single, userRouter);

export default app;