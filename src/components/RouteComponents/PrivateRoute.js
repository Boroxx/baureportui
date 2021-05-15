import React from 'react'
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute(props,{component:Component,...rest}) {
    const jwtCheck = props.containsJWT;
    return (
        <Route {...rest} render={props => (
            jwtCheck() ?
                <Component {...props} />
            : <Redirect to="/loginpage" />
        )} />
    )
}

export default PrivateRoute
