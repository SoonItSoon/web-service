import React, { useEffect, useState } from 'react';
import AppFooter from 'partials/Footer';
import Navigator from 'partials/Navigator';
import AppRouter from 'routers/AppRouter';
import { authService } from 'fbInstance';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {
        init ? 
        <>
          <Navigator isLoggedIn={isLoggedIn} />
          <AppRouter />
          <AppFooter />
        </>
        : "Loading..."
      }
    </>
  );
}

export default App;
