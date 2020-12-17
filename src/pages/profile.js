import React, { useContext, useEffect } from 'react'
import { ErrorBoundry } from '../components/common/error-boundry'
import { Loader } from '../components/common/Loader/Loader'
import { UserProfile } from '../components/user-profile'
import { UserContext } from '../context/userContext'
import withAuthRedirect from '../HOC/withAuthRedirect'
import { useFetch } from '../hooks/useFetch'

const Profile = ({location}) => {
    const apiUrl = location.pathname
    const [{response, error, isLoading}, doFetch] = useFetch(apiUrl)
    
    useEffect(() => {
        doFetch()
    }, [doFetch])

    if (isLoading) {
        return <Loader/>
    }

    if (error) {
        return <ErrorBoundry />
    }

    return (
        <UserProfile {...response} />
    )
}

export default withAuthRedirect(Profile)