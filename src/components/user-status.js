import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const UserStatus = ({ userId }) => {
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

    if (isLoading) {
        return <div>Loading ...</div>
    }

    return (
        <h6>
            {toggleOnTextArea && (
                <textarea
                    onChange={(e) => setTextArea(e.target.value)}
                    onBlur={() => {
                        seToggleOnTextArea(false)
                        setInitStatusChange(true)
                    }}
                    value={textArea}>
                </textarea>
            )}
            {!toggleOnTextArea && (
                <div onClick={() => {
                    seToggleOnTextArea(true)
                }}>
                    {textArea}
                </div>
            )}
        </h6>
    )
}

export default UserStatus