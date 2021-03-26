import React from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import Profile from 'routes/Profile';
import EditProfile from 'routes/EditProfile';
import urls from 'urls';

const ProfileRouter = ({auth}) => {
    const history = useHistory();
    return (
        <Router>
            <Route exact path={urls.profile}>
                { auth ?
                    (
                        <Profile />
                    ) : (
                        history.push(urls.home)
                    )
                }    
            </Route>
            <Route exact path={urls.editProfile}>
                { auth ?
                    (
                        <EditProfile />
                    ) : (
                        history.push(urls.home)
                    )
                }    
            </Route>
        </Router>
    )
}

export default ProfileRouter;