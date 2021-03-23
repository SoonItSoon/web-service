import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from 'routes/Profile';
import EditProfile from 'routes/EditProfile';
import Home from 'routes/Home';
import urls from 'urls';

const ProfileRouter = ({auth}) => {
    return (
        <Router>
            <Route exact path={urls.profile}>
                { auth ?
                    (
                        <Profile />
                    ) : (
                        <Home />
                    )
                }    
            </Route>
            <Route exact path={urls.editProfile}>
                { auth ?
                    (
                        <EditProfile />
                    ) : (
                        <Home />
                    )
                }    
            </Route>
        </Router>
    )
}

export default ProfileRouter;