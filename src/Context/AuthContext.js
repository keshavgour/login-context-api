import React from "react";
import { useState, createContext  } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {

    const [formData, setFormData] = useState({
            username: '',
            email: '',
            password: ''
    })

    const contextValue = {
        formData,
        setFormData
    };
 

  
    return(
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}