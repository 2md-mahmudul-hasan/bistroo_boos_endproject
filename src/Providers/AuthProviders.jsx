import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext()

const AuthProviders = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)


  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)

  }
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)

  }

  const logOut = () => {
    return signOut(auth).then(() => {
      setLoading(false)
    }).catch((error) => {
      // An error happened.
    });

  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUser(uid)
      }
      return () => {
        return unSubscribe();
      }
    });
  })
  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;