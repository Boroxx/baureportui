import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { faFileDownload, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AngebotAnfr from './AngebotAnfr';

function AngebotAnfrModul(props) {
    const angebotListe= ["dummy"];
    return (
        <Container className="bg-light rounded  p-3">
            
            <div className="d-flex">
            <h2 className="">
                Angebotsanfragen 
            </h2>
            <div className="ml-auto">
            <FontAwesomeIcon icon={faQuestionCircle} size='2x'/>

            </div>
            </div>
            
            <hr></hr>

            {angebotListe.map((angebot,index) => {
                return (<AngebotAnfr key={index} angebot={angebot}/>)
            })}
           
                
            
         </Container>
    )
}

export default AngebotAnfrModul
