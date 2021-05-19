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
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import Logout from "./components/Logout";
import axios from "axios";

function App() {


  const containsJWT = () => {
    const token = localStorage.getItem("auth");
    if (token) {
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
      return true;
    } else return false;
  };

  /*ModulInfoData wird ,sobald das Dashboard mounted,mithilfe eines fetchs gesetzt
    Ist umstaendlich da BasicModal auch Information braucht.
  */ 
  const [modulInfoData, setModulInfoData] = useState([
    {
      bauModulName: "",
      id: 0,
      text: "",
    },
  ]);

  const [fetchLoaded, setFetchIsLoaded] = useState({
    topbaumodule: false,
    angebotanfrmodul: false,
    anfrstatus: false,
  });

  return (
    <Router>
      <Container fluid className="p-0">
        <Switch>
          <Route path="/loginpage">
            <LoginModul></LoginModul>
          </Route>

          <PrivateRoute
            containsJWT={containsJWT}
            exact={true}
            path="/dashboard"
            component={Dashboard}
            modulInfoData={modulInfoData}
            setModulInfoData={setModulInfoData}
            fetchLoaded={fetchLoaded}
            setFetchIsLoaded={setFetchIsLoaded}
          />

          <Route exact path="/baumodul/:id">
            <NavBar></NavBar>
            <BasicModal modulInfoData={modulInfoData}/>
          </Route>

          <Route exact path="/projekt/:projektid">
            <NavBar></NavBar>
            <ProjektUebersicht></ProjektUebersicht>
          </Route>

          <Route exact path="/baumodul/:id/dialog">
            <NavBar></NavBar>
            <GehwegModulDialog></GehwegModulDialog>
          </Route>

          <Route exact path="/logout">
            <Logout></Logout>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
