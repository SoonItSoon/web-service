import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeRouter from 'routers/HomeRouter';
import ProfileRouter from 'routers/ProfileRouter';

const AppRouter = () => {
    return (
        <Router>
            <Route path='/profile'>
                <ProfileRouter />
            </Route>
            <Route path='/'>
                <HomeRouter />
            </Route>
        </Router>
    )
}

export default AppRouter;