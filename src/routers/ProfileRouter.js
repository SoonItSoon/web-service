import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from 'routes/Profile';
import EditProfile from 'routes/EditProfile';
import Home from 'routes/Home';

const ProfileRouter = ({auth}) => {
    return (
        <Router>
            <Route exact path='/profile'>
                { auth ?
                    (
                        <Profile />
                    ) : (
                        <Home />
                    )
                }    
            </Route>
            <Route exact path='/profile/edit'>
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