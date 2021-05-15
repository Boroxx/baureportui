import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

function AnfrageStatus() {
    const status ={
        angebot_erstellt: "Angeboterstellung", 
        angebot_generiert: "Angebotsbearbeitung",
    }

    return (

        
        <Container className="bg-light rounded p-3">
            <h2 className="">
                Anfrage Status 
            </h2>

            <p><b>Baufortschritt</b></p>
            <Row>
           
            <Col><p>Projekt: </p>
            Status:<ProgressBar now={50} label={status.angebot_erstellt}/></Col>
            
            </Row>
            
        </Container>
    )
}

export default AnfrageStatus
