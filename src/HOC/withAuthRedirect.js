import React from 'react'
import { Redirect } from 'react-router-dom'
const { useContext } = require("react")
const { UserContext } = require("../context/userContext")

const withAuthRedirect = Component => (props) => {
    const [{ isLogedOn }] = useContext(UserContext)

    if (!isLogedOn) {
        return <Redirect to="/login" />
    }

    return <Component {...props}/>
}
export default withAuthRedirect