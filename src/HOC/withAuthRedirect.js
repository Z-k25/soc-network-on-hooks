import React from 'react'
import { Redirect } from 'react-router-dom'
const { useContext } = require("react")
const { UserContext } = require("../context/userContext")

const withAuthRedirect = Component => (props) => {
    const [{ isLogedOn }] = useContext(UserContext)
    const {location} = props

    if (!isLogedOn) {
        return <Redirect to={{
            pathname: "/login",
            state: { beforePage: location.pathname }
        }} />
    }

    return <Component {...props} />
}
export default withAuthRedirect