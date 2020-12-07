const { useState, useEffect, useCallback } = require("react")
const { useFetch } = require("./useFetch")

const useAuth = () => {
    const [state, setState] = useState(
        {
            id: null,
            login: null,
            email: null,
            isLogedOn: null
        })
    const [isLoading, setIsLoading] = useState(true)

    const [{ response, resultCode }, doFetch] = useFetch('/auth/me')

    const setAuthData = useCallback(() => {
        doFetch()
        console.log("СРАБОТАЛО!!!")
        setIsLoading(true)
    }, [doFetch])

    console.log(isLoading)
    useEffect(() => {
        if (resultCode === 0) {
            setState(prevState => {
                return {
                    ...prevState,
                    ...response,
                    isLogedOn: true
                }
            })
            setIsLoading(false)
        }

        if (resultCode === 1) {
            setState(prevState => {
                return {
                    ...prevState,
                    isLogedOn: false
                }
            })
        }

    }, [resultCode, response])     //нужно мемоизировать state!!!!

    return [state, isLoading, setAuthData]
}

export { useAuth }