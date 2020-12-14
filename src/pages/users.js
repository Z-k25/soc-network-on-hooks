import React, { useEffect, useState } from 'react'
import { ErrorBoundry } from '../components/common/error-boundry'
import { Loader } from '../components/common/Loader/Loader'
import Paginator from '../components/paginator'
import UsersCards from '../components/user-card'
import { useFetch } from '../hooks/useFetch'
import { urlParser } from '../utils/utils'

const Users = ({ history, location }) => {
    const pagesCount = 12
    const startPage = urlParser(location.search, 'page')
    const [currentPage, setCurrentPage] = useState(startPage || 1)
    const apiUrl = `/users?count=${pagesCount}&page=${currentPage}`
    const [{ response, error, isLoading }, doFetch] = useFetch(apiUrl)
    const { items, totalCount } = response
    const totalPagesCount = Math.ceil(totalCount / pagesCount)

    const onCurrentPageChange = (page, range = 0) => {
        if (page < 1) {
            return setCurrentPage(1)
        }
        if (page > totalCount) {
            return setCurrentPage(totalCount - range)
        }
        return setCurrentPage(page)
    }

    useEffect(() => {
        doFetch()
    }, [doFetch, startPage])

    useEffect(() => {
        if (currentPage >= 1 && currentPage <= totalPagesCount) {
            history.push(apiUrl)
        }
    }, [currentPage, apiUrl, history, totalPagesCount])

    if (!items && !error) {
        return <Loader />
    }

    if (error) {
        return <ErrorBoundry />
    }

    return (
        <div className="my-4">
            <Paginator
                startPage={startPage}
                totalPagesCount={totalPagesCount}
                currentPage={currentPage}
                onCurrentPageChange={onCurrentPageChange} />
            <UsersCards 
                items={items} 
                isLoading={isLoading} />
        </div>
    )
}

export default Users