import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeRouter from 'routers/HomeRouter';
import ProfileRouter from 'routers/ProfileRouter';

const AppRouter = ({auth}) => {
    return (
        <Router>
            <Route path='/profile'>
                <ProfileRouter auth={auth} />
            </Route>
            <Route path='/'>
                <HomeRouter auth={auth} />
            </Route>
        </Router>
    )
}

export default AppRouter;