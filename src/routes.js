import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Users from './pages/users'
import Profile from './pages/profile'
import SignForm from './components/sign-form'
import { Loader } from './components/common/Loader/Loader'
import { UserContext } from './context/userContext'

const Routes = () => {
    const [{ isLoading, id }] = useContext(UserContext)

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
                <Route path="/" render={() => <Redirect to={`/profile/${id}`} />} exact />
                <Route path="/profile" render={() => <Redirect to={`/profile/${id}`} />} exact />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/users/" component={Users} />
                <Route path="/login" component={SignForm} />
                <Route path="/register" component={SignForm} />
            </Switch>
        </div>
    )
}

export default Routes