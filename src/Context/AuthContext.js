import React from "react";
import { useState, createContext  } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const value = {
        username,
        setUsername,
        password,
        setPassword
    }

    return(
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )
}