import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Briefing from "routes/Briefing";
import CheckSafety from "routes/CheckSafety";
import Help from "routes/Help";
import Home from "routes/Home";
import Interest from "routes/Interest";
import NotFound from "routes/NotFound";
import Result from "routes/Result";
import Search from "routes/Search";
import SignIn from "routes/Sign-In";
import Timeline from "routes/Timeline";
import urls from "values/urls";

const AppRouter = ({ auth, userObj }) => {
    return (
        <Router>
            <Switch>
                <Route exact path={urls.home}>
                    <Home auth={auth} />
                </Route>
                <Route exact path={urls.help}>
                    <Help />
                </Route>
                <Route exact path={urls.signin}>
                    <SignIn auth={auth} />
                </Route>
                <Route exact path={urls.briefing}>
                    <Briefing auth={auth} />
                </Route>
                <Route exact path={urls.interest}>
                    <Interest auth={auth} userObj={userObj} />
                </Route>
                <Route exact path={urls.safety}>
                    <CheckSafety auth={auth} />
                </Route>
                <Route exact path={urls.timeline}>
                    <Timeline auth={auth} userObj={userObj} />
                </Route>
                <Route exact path={urls.search}>
                    <Search auth={auth} />
                </Route>
                <Route exact path={urls.result}>
                    <Result auth={auth} />
                </Route>
                <Route exact path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
