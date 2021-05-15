import { Button, Modal } from 'react-bootstrap'
import React from 'react'
import { useParams } from 'react-router-dom'
import {Link} from "react-router-dom";

function BasicModal(props) {
    const {id} = useParams();
   const baumodul = props.bauModulListe.filter(item =>item.id ===1)[0];
  

    return (
        <div>
                <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>{baumodul.bauModulName}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>{baumodul.text}</p>
  </Modal.Body>

  <Modal.Footer>
    <Link to={`/baumodul/${baumodul.id}/dialog`}><Button  variant="success">Jetzt Angebot anfordern</Button></Link>
    <Link to="/dashboard"><Button  variant="secondary">Zurück</Button></Link>
  </Modal.Footer>
</Modal.Dialog>

        </div>
    )
}

export default BasicModal
