import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Utils/firebase.config';
export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();



const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }




    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    };

    const LogOut = () => {
        setLoading(true)
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
        signInWithGoogle,
        updateUser
    }

    return (
        <AuthContext value={authData} >
            {children}
        </AuthContext>
    );
};

export default AuthProvider;