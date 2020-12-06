import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Users from './components/users'
import Profile from './components/profile'

const Routes = () => {
    return (
        <div className="col-md-10 routes" >
            <Switch>
                <Route path="/" component={Profile} exact/>
                <Route path="/profile/:id?" component={Profile} />
                <Route path="/users/" component={Users} />
                <Route path="/login" component={<div>login</div>} />
            </Switch>
        </div>
    )
}

export default Routes