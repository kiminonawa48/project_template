import React from 'react'
import {
    Route
} from 'react-router-dom'
import { useAuth } from './ProvideAuth'

export default function PrivateRoute({ component, ...rest }) {
    const { currentUser } = useAuth()
    
    if (currentUser) {

        return (
            <Route
                {...rest}
                render={props => <component {...props} />}
            ></Route>
        )
      
    } else {
        window.location.href = "/login"
    }
  
    
}
  
