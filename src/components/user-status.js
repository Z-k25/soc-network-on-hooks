import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const UserStatus = ({ userId, currentUserId }) => {
    const apiUrlStatus = `/profile/status/${userId}`
    const [{ response, isLoading }, doFetchStatus] = useFetch(apiUrlStatus)
    const [, doSetStatus] = useFetch(`/profile/status`)
    const [toggleOnTextArea, seToggleOnTextArea] = useState(false)
    const [textArea, setTextArea] = useState(response.status)
    const [initStatusChange, setInitStatusChange] = useState(false)

    useEffect(() => {
        doFetchStatus()
    }, [doFetchStatus])

    useEffect(() => {
        if (!initStatusChange) {
            return
        }

        doSetStatus({
            method: "put",
            data: { status: textArea }
        })

        setInitStatusChange(false)
    }, [doSetStatus, initStatusChange, textArea])

    useEffect(() => {
        setTextArea(response.status)
    }, [response])

    const userStatus = userId !== currentUserId && (
        <div>{textArea}</div>
    )

    const currentUserStatus = !toggleOnTextArea && userId === currentUserId && (
        <div onClick={() => {
            seToggleOnTextArea(true)
        }}>
            {textArea}
        </div>
    )

    const changeCurrentUserStatus = toggleOnTextArea && userId === currentUserId && (
        <textarea
            onChange={(e) => setTextArea(e.target.value)}
            onBlur={() => {
                seToggleOnTextArea(false)
                setInitStatusChange(true)
            }}
            value={textArea}>
        </textarea>
    )

    if (isLoading) {
        return <div>Loading ...</div>
    }

    return (
        <h6>
            {userStatus}
            {currentUserStatus}
            {changeCurrentUserStatus}
        </h6>
    )
}

export default UserStatus