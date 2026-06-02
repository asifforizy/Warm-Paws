import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Utils/firebase.config';
export const AuthContext = createContext()



const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }






    const LogOut = () => {
        return signOut(auth)

    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])



    const authData = {
        user,
        setUser,
        createUser,
        LogOut,
        loading,
        setLoading,
        signIn,
    }

    return (
        <AuthContext value={authData} >
            {children}
        </AuthContext>
    );
};

export default AuthProvider;