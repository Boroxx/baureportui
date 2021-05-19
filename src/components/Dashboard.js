import React, { useState, useEffect } from "react";
import AnfrageStatus from "./AnfrageStatus";
import AngebotAnfrModul from "./AngebotAnfrModul";
import { Col, Row } from "react-bootstrap";
import { Route } from "react-router-dom";

import TopBauModule from "./TopBauModule";
import NavBar from "./NavBar";
import axios from "axios";
import BasicModal from "./BasicModal";
function Dashboard(props) {
  const [showInfoModul, setShowInfoModul] = useState(false);



  useEffect(() => {
    axios
      .get("/dashboard/topbaumodule")
      .then((response) => {
        const data = response["data"];
        props.setModulInfoData(data);

        props.setFetchIsLoaded({topbaumodule: true });
      })
      .catch();
    return () => {};
  }, []);


  return (
    <div>
      <NavBar></NavBar>

      <Row noGutters>
        <Col xs={12} md={4} className="p-3">
          <TopBauModule
            {...props}
            showInfoModul={showInfoModul}
            setShowInfoModul={setShowInfoModul}
          ></TopBauModule>
        </Col>
        <Col xs={12} md={8} className="p-3">
          <AngebotAnfrModul></AngebotAnfrModul>
        </Col>

        <Col xs={12} md={4} className="p-3">
          <AnfrageStatus></AnfrageStatus>
        </Col>
        <Col xs={12} md={8}></Col>
      </Row>
    </div>
  );
}

export default Dashboard;
