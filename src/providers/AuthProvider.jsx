import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext= createContext()
const auth= getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser]= useState()
    const [loader, setLoader]= useState()

    const AuthInfo= {
        user, 
        loader
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;