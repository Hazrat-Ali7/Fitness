import { getAuth } from 'firebase/auth';
import React from 'react'
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../firebase.init';

const RequireAuth = ({ children }) => {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  const location = useLocation()
  if (loading) {
    return <div className='spinner-container'>
      <Spinner className='loading-spinner' animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  }
  else if (!user) {
    return <Navigate to='/user' state={{ from: location }} replace />
  }
  return children
}

export default RequireAuth