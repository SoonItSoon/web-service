import routes from './routes';

const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'SoonItSoon Web Service';
    res.locals.routes = routes;
    
    console.log('Passed Locals');
    next();
}

export default localsMiddleware;