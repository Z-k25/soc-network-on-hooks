import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route path="/profile/:id" component={<div>Profile</div>} />
                <Route path="/users/" component={<div>Users</div>} />
                <Route path="/login" component={<div>login</div>} />
            </Switch>
        </Fragment>
    )
}

export default Routes