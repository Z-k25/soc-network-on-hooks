import { useCallback, useEffect, useState } from "react"
import { useFetch } from "./useFetch"

const useFollow = (id, initValue) => {

    const [{ resultCode }, doFetch] = useFetch(`/follow/${id}`)
    const [isFollowed, setIsFollowed] = useState(initValue)
    const [isFetching, setIsFetching] = useState(null)
    const [follow, setFollow] = useState(null)
    const [unFollow, setUnfollow] = useState(null)
    const options = useCallback((method) => ({ method, data: { userId: id } }), [id])
    console.log(resultCode)
    useEffect(() => {
        if (follow) {
            doFetch(options("post"))
        }
        if (unFollow) {
            doFetch(options("delete"))
        }
    }, [doFetch, follow, options, unFollow])

    useEffect(() => {
        if (resultCode === 0 && follow) {
            setFollow(false)
            setIsFollowed(true)
        }
        if (resultCode === 0 && unFollow) {
            setUnfollow(false)
            setIsFollowed(false)
        }
        setIsFetching(false)
    }, [follow, resultCode, unFollow])

    const makeRequest = useCallback(key => {
        if (key === 'follow') {
            setFollow(true)
        }
        if (key === 'unfollow') {
            setUnfollow(true)
        }
        setIsFetching(true)
    }, [])

    return [{ isFollowed, isFetching }, makeRequest]
}

export default useFollow