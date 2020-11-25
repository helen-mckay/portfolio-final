import React from 'react';
import { Route } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../firebase';
import Error from '../Page/Error/Error';

const ProtectedRoute = ({ component: Component, ...rest }) => 
{
  const [user, , ,] = useAuthState(firebase.auth());

  return (
    <Route {...rest} render={
      props => {
          return(
            <>
              {user ?
                <Component {...rest} {...props}/>
                :
                <Error/>
              }
            </>
          );
      }
    } />
  )
}

export default ProtectedRoute;