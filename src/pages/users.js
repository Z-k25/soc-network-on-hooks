import React, { useEffect } from 'react'
import {useFetch} from '../hooks/useFetch'

const Users = () => {
    const [{response}, doFetch] = useFetch('/users')
    console.log(response)
    useEffect(() => {
        doFetch()
    }, [doFetch])

    return (
        <div>USERS</div>
    )
}

export default Users