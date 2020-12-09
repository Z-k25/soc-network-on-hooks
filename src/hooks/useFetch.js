import Axios from "axios"
import { useCallback, useEffect, useState } from "react"

export const useFetch = (url) => {
    const baseUrl = 'https://social-network.samuraijs.com/api/1.0'
    const [response, setResponse] = useState({})
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
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
        setIsLoading(true)
    }, [url])

    useEffect(() => {
        if (!isLoading) {
            return
        }

        Axios(options)
            .then((res) => {
                if (res.data.items) {
                    setResponse(res.data)
                }
                if (res.data.resultCode === 1) {
                    setError(res.data.messages)
                }
                if (res.data.resultCode === 0) {
                    setResponse(res.data.data)
                }
                setIsLoading(false)
                setResultCode(res.data.resultCode)
            })

            .catch((data) => {
                console.log(data)

                setIsLoading(false)
            })
    }, [options, isLoading])

    return [{ response, error, isLoading, resultCode }, doFetch]

}

