import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Help from 'routes/Help';
import Home from 'routes/Home';
import SignIn from 'routes/Sign-In';

const HomeRouter = () => {
    return (
        <Router>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/help'>
                <Help />
            </Route>
            <Route exact path='/sign-in'>
                <SignIn />
            </Route>
        </Router>
    )
}

export default HomeRouter;