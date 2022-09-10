import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import { ProvideAuth } from 'routes/auth/ProvideAuth'

import PrivateRoute from './auth/PrivateRoute'

import RoutesList from './routes'

const Routes = () => {

    return (
        <ProvideAuth>
            <Router>
                <Switch>

                    {RoutesList.map((r, i) => {

                        if (r.route_type === "redirect") {
                            return (
                                <Redirect key={r.path} to="/login" from="/" />
                            )

                        } 
                        else if (r.route_type === "private_route") {
                            return (
                                <PrivateRoute key={r.path} path={r.path} exact={r.is_exact}>
                                    {r.component}
                                </PrivateRoute>
                            )

                        } 
                        else {
                            return (
                                <Route key={r.path} path={r.path} exact={r.is_exact}>
                                    {r.component}
                                </Route>
                            )

                        }
                    })}

                </Switch>
            </Router>
        </ProvideAuth>
    )
}

export default Routes
