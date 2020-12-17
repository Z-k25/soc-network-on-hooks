import React, { createContext, useEffect, useReducer, useState } from 'react'
import { authDataReducer, success, failure, clear, initialState } from '../hooks/authReducer'
import { useFetch } from '../hooks/useFetch'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const apiUrl = '/auth/me'
    const [authData, dispatch] = useReducer(authDataReducer, initialState)
    const [{ response, resultCode }, doFetch] = useFetch(apiUrl)
    const [startAuth, setStartAuth] = useState(false)
    const [clearAutData, setClearAuthData] = useState(false)

    useEffect(() => {
        doFetch()
    }, [doFetch])

    useEffect(() => {
        if (startAuth) {
            doFetch()
            setStartAuth(false)
        }
    }, [startAuth, doFetch])

    useEffect(() => {
        if (clearAutData) {
            dispatch(clear())
            setClearAuthData(false)
        }
    }, [clearAutData])

    useEffect(() => {
        if (resultCode === 0) {
            dispatch(success(response))
        }

        if (resultCode === 1) {
            dispatch(failure())
        }
    }, [response, resultCode])

    return (
        <UserContext.Provider value={[authData, setStartAuth, setClearAuthData]}>
            {children}
        </UserContext.Provider>)
}



