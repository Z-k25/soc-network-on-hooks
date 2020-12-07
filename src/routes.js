import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Users from './pages/users'
import Profile from './pages/profile'
import SignForm from './components/sign-form'

const Routes = () => {
    return (
        <div className="col-md-10 routes" >
            <Switch>
                <Route path="/" component={Profile} exact />
                <Route path="/profile/:id?" component={Profile} />
                <Route path="/users/" component={Users} />
                <Route path="/login" component={SignForm} />
                <Route path="/register" component={SignForm} />
            </Switch>
        </div>
    )
}

export default Routes