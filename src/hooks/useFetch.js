import Axios from "axios"
import { useCallback, useEffect, useState } from "react"

export const useFetch = (url) => {
    const baseUrl = 'https://social-network.samuraijs.com/api/1.0'
    const [response, setResponse] = useState({})
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isFetching, setIsFetching] = useState(false)
    const [resultCode, setResultCode] = useState(null)
    const [options, setOptions] = useState({})

    const doFetch = useCallback((options = {}) => {
        const requestedOptions = {
            headers: {
                'API-KEY': '773c3889-d02d-4ba7-9454-afd959099de4'
            },
            withCredentials: true,
            method: 'get',
            url: `${baseUrl}${url}`,
            ...options
        }
        setOptions({ ...requestedOptions })
        setIsFetching(true)
    }, [url])

    useEffect(() => {
        if (!isFetching) {
            return
        }

        Axios(options)
            .then((res) => {
                if (res.data.userId) {
                    setResponse(res.data)
                }
                if (res.data.items) {
                    setResponse(res.data)
                }
                if (res.data.resultCode === 1) {
                    setError(res.data.messages)
                    setResultCode(res.data.resultCode)
                }
                if (res.data.resultCode === 0) {
                    setResponse(res.data.data)
                    setResultCode(res.data.resultCode)
                }
                if (res.data && typeof res.data === 'string') {
                    setResponse({status: res.data})
                }
                setIsFetching(false)
                setIsLoading(false)
            })

            .catch((data) => {
                setError(data)
                setIsFetching(false)
                setIsLoading(false)
            })
    }, [options, isFetching])

    return [{ response, error, isLoading, resultCode }, doFetch]

}

