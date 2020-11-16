import firebase from './firebase';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import ProtectedRoute from './Tool/ProtectedRoute';

import Header from './Style/Header/Header';
import Portfolio from './Page/Portfolio/Portfolio';
import SignIn from './Page/SignIn/SignIn';
import Admin from './Page/Admin/Admin';
import Home from './Page/Home/Home';

import './App.css';

const App = () => {
  const [user, user_loading, user_error] = useAuthState(
    firebase.auth()
  );

  return (
    <div className="App">
      <Header/>
      <main>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/portfolio">
            <Portfolio/>
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
      </main>
    </div>
  );
}

export default App;
