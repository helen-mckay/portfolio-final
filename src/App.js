import logo from './logo.svg';
import './App.css';

import firebase from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {

  const [user, user_loading, user_error] = useAuthState(
    firebase.auth()
  );

  const logout = () => {
    firebase.auth().signOut();
  }

  const login = () => {
    firebase.auth().signInWithEmailAndPassword("helenmckaypersonal@gmail.com", "THISISMYWEBSITE");
  }

  return (
    <div className="App">
      {user ? <button onClick={logout}>log out</button> : <button onClick={login}>log in</button>}
      {user_loading && <p>loading...</p>}
      {user && <p>Hello handsome</p>}
    </div>
  );
}

export default App;
