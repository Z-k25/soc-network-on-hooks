import React, { useContext } from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import Users from './pages/users'
import Profile from './pages/profile'
import SignForm from './components/sign-form'
import { Loader } from './components/common/Loader/Loader'
import { UserContext } from './context/userContext'
import Messages from './pages/messages'

const Routes = () => {
    const [{ isLoading, id, isLogedOn }] = useContext(UserContext)

    const profileRender = () => {
        if (isLogedOn) {
            return <Redirect to={`/profile/${id}`} />
        }
        if (!isLogedOn) {
            return <Redirect to="/login" />
        }
    }

    if (isLoading) {
        return (
            <div className="col-lg-10 routes">
                <Loader />
            </div>
        )
    }
    return (
        <div className="col-lg-10 routes" >
            <Switch>
                <Route path="/" render={profileRender} exact />
                <Route path="/profile" render={profileRender} exact />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/messages/" component={Messages} />
                <Route path="/users/" component={Users} />
                <Route path="/login" component={SignForm} />
                <Route path="/register" component={SignForm} /> 
            </Switch>
        </div>
    )
}

export default withRouter(Routes)