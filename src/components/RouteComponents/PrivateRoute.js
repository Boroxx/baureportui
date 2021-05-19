import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, containsJWT, ...rest }) {
   
    const {modulInfoData,setModulInfoData,fetchLoaded,setFetchIsLoaded} = rest;
  return (
    <Route
      {...rest}
      render={(props) =>(
        containsJWT() ? <Component {...props} modulInfoData={modulInfoData}setModulInfoData={setModulInfoData}
        fetchLoaded={fetchLoaded}
        setFetchIsLoaded={setFetchIsLoaded} /> : <Redirect to="/loginpage" />
      
      )}
    />
  );
}

export default PrivateRoute;
