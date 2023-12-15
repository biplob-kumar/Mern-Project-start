import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import LoadingSpinner from '../components/LoadingSpiner';

const PrivatRouter = ({children}) => {
    const {user, loading} =  useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <LoadingSpinner/>
        )
    }
    if(user) {
        return children;
    }
  return (
    <Navigate to='/login' state={{from:location}} replace > </Navigate>
  )
}

export default PrivatRouter