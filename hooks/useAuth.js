import React, { createContext, useContext } from 'react';
import * as Google from "expo-auth-session"

const AuthContext = createContext({});

const config = {
  androidClientId: '72880726709-7rmf3nd7okovgc6fqbtaopakjv18jv46.apps.googleusercontent.com',
  iosClientId: '72880726709-l1dtgm5eu3l8e6vqss76d9sbts040u56.apps.googleusercontent.com',
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"]
}

export const AuthProvider = ({ children }) => {
  const signinWithGoogle = async() =>{
    Google.logInAsync(config).then( async (logInResult) =>{
      if(logInResult.type === 'success'){
        //Login
      }
    })
  }

  return (
    <AuthContext.Provider
    value={{
      user: null,
      signinWithGoogle,
    }}>
        { children }
    </AuthContext.Provider>
  );
};

export default function useAuth(){
  return useContext(AuthContext);
}