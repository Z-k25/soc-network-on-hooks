import React, { useEffect } from 'react'
import { Loader } from '../components/common/Loader/Loader'
import UsersCards from '../components/user-cart'
import { useFetch } from '../hooks/useFetch'

const Users = () => {
    const [{ response, isLoading }, doFetch] = useFetch('/users')
    const { items } = response
    console.log(items, isLoading)
    useEffect(() => {
        doFetch()
    }, [doFetch])

    if (isLoading || !items) {
        return <Loader />
    }

    return (
        <UsersCards items={items} />
    )
}

export default Users