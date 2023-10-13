import React, { Children, createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';


const AuthProviders = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const AuthContext = createContext()
  const authInfo = {
    user,

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;