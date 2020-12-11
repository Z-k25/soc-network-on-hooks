import React, { useEffect, useState } from 'react'
import { Loader } from '../components/common/Loader/Loader'
import Paginator from '../components/paginator'
import UsersCards from '../components/user-cart'
import { useFetch } from '../hooks/useFetch'

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const pagesCount = 12
    const apiUrl = `/users?count=${pagesCount}&page=${currentPage}`
    const [{ response, isLoading }, doFetch] = useFetch(apiUrl)
    const { items, totalCount } = response
    const totalPagesCount = Math.ceil(totalCount/pagesCount)

    useEffect(() => {
        doFetch()
    }, [doFetch])

    
    if (isLoading || !items) {
        return <Loader /> 
    }

    return (
        <div className="my-4">
            <Paginator 
                totalPagesCount={12}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}/>
            <UsersCards items={items} />
            <Paginator />
        </div>
    )
}

export default Users