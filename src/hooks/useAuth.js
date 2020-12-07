const { useState, useEffect, useCallback } = require("react")
const { useFetch } = require("./useFetch")

const useAuth = () => {
    const [state, setState] = useState(
        {
            id: null,
            login: null,
            email: null,
            isLogedOn: null,
            isLoading: true
        })

    const [{ response, resultCode }, doFetch] = useFetch('/auth/me')

    const setAuthData = useCallback(() => {
        doFetch()
        setState(prevState => ({
            ...prevState,
            isLoading: true
        }))
    }, [doFetch])

    useEffect(() => {
        if (resultCode === 0) {
            setState(prevState => ({
                ...prevState,
                ...response,
                isLogedOn: true,
                isLoading: false
            }))
        }

        if (resultCode === 1) {
            setState(prevState => ({
                ...prevState,
                isLogedOn: false,
                isLoading: false
            }))
        }

    }, [resultCode, response])

    return [state, setAuthData]
}

export { useAuth }