import React,{useState} from 'react'
import AnfrageStatus from "./AnfrageStatus";
import AngebotAnfrModul from "./AngebotAnfrModul";
import { Col, Container, Row } from "react-bootstrap";

import TopBauModule from "./TopBauModule";
import NavBar from './NavBar';
function Dashboard() {
    const [showInfoModul, setShowInfoModul] = useState(false);
    const [modulInfoData, setModulInfoData] = useState({
      bauModulName: "",
      id: 0,
      text: "",
    });
  
    return (
        <div>
            <NavBar></NavBar>

<Row noGutters>
  <Col xs={12} md={4} className="p-3">
    <TopBauModule
      modulInfoData={modulInfoData}
      setModulInfoData={setModulInfoData}
      showInfoModul={showInfoModul}
      setShowInfoModul={setShowInfoModul}
    >
      {" "}
    </TopBauModule>
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
    )
}

export default Dashboard
