import React, { useEffect, useState } from "react";
import AppFooter from "partials/Footer";
import Navigator from "partials/Navigator";
import AppRouter from "routers/AppRouter";
import { authService } from "fbInstance";
import "bootstrap/dist/css/bootstrap.min.css";
import "stylesheets/global.css";
import Loading from "partials/Loading";

function App() {
    const [init, setInit] = useState(false);
    const [userObj, setUserObj] = useState(null);
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setUserObj({
                    displayName: user.displayName,
                    uid: user.uid,
                });
            } else {
                setUserObj(null);
            }
            setInit(true);
        });
    }, []);

    const signOut = async () => {
        await authService.signOut();
        setUserObj(null);
    };

    return (
        <>
            {init ? (
                <>
                    <Navigator
                        auth={Boolean(userObj)}
                        userObj={userObj}
                        signOut={signOut}
                    />
                    <AppRouter auth={Boolean(userObj)} userObj={userObj} />
                </>
            ) : (
                <>
                    <Navigator titleOnly={true} />
                    <Loading />
                </>
            )}
            <AppFooter />
        </>
    );
}

export default App;
