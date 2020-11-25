import React, { Suspense, useEffect } from 'react';
import firebase from './firebase';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import ProtectedRoute from './Tool/ProtectedRoute';
import ErrorBoundary from './Tool/ErrorBoundary';

import Header from './Style/Header/Header';
import './App.css';

const Portfolio = React.lazy(() => import('./Page/Portfolio/Portfolio'));
const SignIn = React.lazy(() => import('./Page/SignIn/SignIn'));
const Admin = React.lazy(() => import('./Page/Admin/Admin'));
const Bio = React.lazy(() => import('./Page/Bio/Bio'));
const Home = React.lazy(() => import('./Page/Home/Home'));
const Error = React.lazy(() => import('./Page/Error/Error'));

const App = () => {
  const [user] = useAuthState(
    firebase.auth()
  );

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/")
    {
      document.title = "Helen McKay";
    }
    else if (location.pathname === "/portfolio")
    {
      document.title = "Helen McKay | Portfolio";
    }
    else if (location.pathname === "/bio")
    {
      document.title = "Helen McKay | Bio";
    }
    else if (location.pathname === "/signin")
    {
      document.title = "Helen McKay | Sign In";
    }
    else if (location.pathname === "/admin")
    {
      document.title = "Helen McKay | Admin";
    }
    else
    {
      document.title = "Error";
    }
  }, [location])

  return (
    <div className="App">
      <Header/>
      <main>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/portfolio">
                <Portfolio/>
              </Route>
              <Route exact path="/bio">
                <Bio/>
              </Route>
              <Route exact path="/signin">
                { user 
                ? 
                  <Redirect to="/admin"/> 
                : 
                  <SignIn/>
                }
              </Route>
              <ProtectedRoute exact path="/admin" component={Admin}/>
              <Route>
                <Error/>
              </Route>
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
