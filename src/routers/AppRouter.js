import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeRouter from 'routers/HomeRouter';
import ProfileRouter from 'routers/ProfileRouter';
import urls from 'urls';

const AppRouter = ({auth}) => {
    return (
        <Router>
            <Route path={urls.profile}>
                <ProfileRouter auth={auth} />
            </Route>
            <Route path={urls.home}>
                <HomeRouter auth={auth} />
            </Route>
        </Router>
    )
}

export default AppRouter;