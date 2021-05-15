import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import "./App.css";

import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BasicModal from "./components/BasicModal";
import GehwegModulDialog from "./components/GehwegModulDialog";
import ProjektUebersicht from "./components/ProjektUebersicht";
import LoginModul from "./components/LoginModul";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/RouteComponents/PrivateRoute";

function App() {

  const bauModulListe = [
    {
      bauModulName: "Gehwegabsenkung",
      id: 1,
      text:
        "Falls Sie eine Gehwegabsenkung brauchen sind Sie hier genau richtig.",
    },
    {
      bauModulName: "Gehwegabsenkung",
      id: 2,
      text:
        "Falls Sie eine Gehwegabsenkung brauchen sind Sie hier genau richtig.",
    },
  ];
  const containsJWT = ()=>{
    return false;
  }

  return (
    <Router>
      <Container fluid className="p-0">
        <Switch>
          <Route path="/loginpage"> 
          <LoginModul></LoginModul>
          </Route>

          <PrivateRoute containsJWT={containsJWT} component={Dashboard} path="/dashboard" exact />
          
        


          <Route exact path="/baumodul/:id">
            <NavBar></NavBar>
            <BasicModal bauModulListe={bauModulListe}></BasicModal>
          </Route>

          <Route exact path="/projekt/:projektid">
            <NavBar></NavBar>
            <ProjektUebersicht></ProjektUebersicht>
          </Route>

          <Route exact path="/baumodul/:id/dialog">
            <NavBar></NavBar>
            <GehwegModulDialog></GehwegModulDialog>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
