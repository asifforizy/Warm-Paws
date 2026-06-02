import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import app from '../Utils/firebase.config';
export const AuthContext = createContext()



const auth = getAuth(app);
const AuthProvider = ({ children }) => {


    const createUser = (email, password) => {
         return createUserWithEmailAndPassword(auth, email, password);
    }






     const LogOut =()=>{
        return signOut(auth)
   
    }


    const [user, setUser] = useState(null);
    const authData = {
        user,
        setUser,
        createUser,

        
        LogOut,

    }

    return (
        <AuthContext value={authData} >
            {children}
        </AuthContext>
    );
};

export default AuthProvider;