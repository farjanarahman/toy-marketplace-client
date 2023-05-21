import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import './Routes/spinner.css'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log('User in Private Route', user)
    if(loading){
        return <div className='spinner'></div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate> 
    
    
};

export default PrivateRoute;