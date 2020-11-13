import logo from './logo.svg';
import './App.css';

import firebase from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {

  const [user, user_loading, user_error] = useAuthState(
    firebase.auth()
  );

  return (
    <div className="App">
      {user && <p>Hello handsome</p>}
    </div>
  );
}

export default App;
