import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Help from 'routes/Help';
import Home from 'routes/Home';
import SignIn from 'routes/Sign-In';
import urls from 'urls';

const HomeRouter = () => {
    return (
        <Router>
            <Route exact path={urls.home}>
                <Home />
            </Route>
            <Route exact path={urls.help}>
                <Help />
            </Route>
            <Route exact path={urls.signin}>
                <SignIn />
            </Route>
        </Router>
    )
}

export default HomeRouter;