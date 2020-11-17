import React, { Suspense } from 'react';
import firebase from './firebase';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import ProtectedRoute from './Tool/ProtectedRoute';
import ErrorBoundary from './Tool/ErrorBoundary';

import Header from './Style/Header/Header';
import Bio from './Page/Bio/Bio';
// import Portfolio from './Page/Portfolio/Portfolio';
// import SignIn from './Page/SignIn/SignIn';
// import Admin from './Page/Admin/Admin';
import Home from './Page/Home/Home';
import './App.css';

const Portfolio = React.lazy(() => import('./Page/Portfolio/Portfolio'));
const SignIn = React.lazy(() => import('./Page/SignIn/SignIn'));
const Admin = React.lazy(() => import('./Page/Admin/Admin'));



const App = () => {
  const [user, user_loading, user_error] = useAuthState(
    firebase.auth()
  );

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
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
