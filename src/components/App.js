import React, { useEffect, useState } from 'react';
import AppFooter from 'partials/Footer';
import Navigator from 'partials/Navigator';
import AppRouter from 'routers/AppRouter';
import { authService } from 'fbInstance';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [init, setInit] = useState(false);
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setAuth(true);
      } else {
        setAuth(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {
        init ? 
        <>
          <Navigator auth={auth} />
          <AppRouter auth={auth} />
          <AppFooter />
        </>
        : "Loading..."
      }
    </>
  );
}

export default App;
