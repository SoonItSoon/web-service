import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from 'routes/Profile';
import EditProfile from 'routes/EditProfile';

const ProfileRouter = () => {
    return (
        <Router>
            <Route exact path='/profile'>
                <Profile />
            </Route>
            <Route exact path='/profile/edit'>
                <EditProfile />
            </Route>
        </Router>
    )
}

export default ProfileRouter;