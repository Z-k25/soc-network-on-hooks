import React, { createContext, useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [authData, setAuthData] = useAuth()
    const [initAuth, setInitAuth] = useState(false)

    useEffect(() => {
        setAuthData()
        
        if (initAuth) {
            setInitAuth(false)
        }
    }, [setAuthData, initAuth])

    return (
        <UserContext.Provider value={[authData, setInitAuth]}>
            {children}
        </UserContext.Provider>)
}



