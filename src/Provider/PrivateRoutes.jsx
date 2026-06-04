import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user, loading } = use(AuthContext);


    if(loading){
        return <span className="loading loading-dots loading-xl"></span>
    }
    


    if(user && user.email){
        return children;
    }

    return <Navigate to="/login" ></Navigate>
   
};

export default PrivateRoutes;