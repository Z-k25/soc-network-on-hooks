import React, { useEffect, useState } from 'react'
import { Loader } from '../components/common/Loader/Loader'
import Paginator from '../components/paginator'
import UsersCards from '../components/user-cart'
import { useFetch } from '../hooks/useFetch'
import { urlParser } from '../utils/utils'

const Users = ({ history, location }) => {
    const pagesCount = 12
    const startPage = urlParser(location.search, 'page')
    const [currentPage, setCurrentPage] = useState(startPage || 1)
    const apiUrl = `/users?count=${pagesCount}&page=${currentPage}`
    const [{ response, isLoading }, doFetch] = useFetch(apiUrl)
    const { items, totalCount } = response
    const totalPagesCount = Math.ceil(totalCount / pagesCount)

    useEffect(() => {
        doFetch()
    }, [doFetch])

    useEffect(() => {
        history.push(apiUrl)
    }, [currentPage, apiUrl, history])

    if (isLoading || !items) {
        return <Loader />
    }

    return (
        <div className="my-4">
            <Paginator
                totalPagesCount={totalPagesCount}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
            <UsersCards items={items} />
            <Paginator />
        </div>
    )
}

export default Users