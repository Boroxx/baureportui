
import React from 'react'
import { Row,Col,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function AngebotAnfr() {

    const PROJEKTID = 1;
    return (
        <div>
            <Row>
                <Col>
                <div>
                <h5>Projekt:</h5>
                <p>Hoemenstr.40</p>
                <h5>Baumodul:</h5>
                <p>Gehwegabsenkung</p>
                <h5>Dokumente:</h5>
                <p><FontAwesomeIcon icon={faFileDownload}/> Angebot herunterladen</p>
                </div>
                
                </Col>
                <Col>
                <div>
                <h5>Aktionen:</h5>
                <div>
                    <p> <Link to={`/projekt/${PROJEKTID}`}><Button variant="dark">Projektübersicht</Button></Link></p>
                   
                    <p><Button variant="dark">Angebot annehmen</Button></p>
                    <p><Button variant="dark">Projekt löschen</Button></p>
                </div>
                </div>
                
                </Col>
            </Row>
        </div>
    )
}

export default AngebotAnfr
