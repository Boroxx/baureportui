import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

function ProjektUebersicht() {

    const {projektid} = useParams();
    return (
        <Container>
            <h5>Projekt {projektid}</h5>

        </Container>
    )
}

export default ProjektUebersicht
