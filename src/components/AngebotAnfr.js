
import React,{useEffect,useState} from 'react'
import { Row,Col,Button, Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AngebotAnfr(props) {
    const [errorState, setErrorState] = useState({error:false,errormessage:""});
    const [successState, setSuccessState] = useState({success:false,successmessage:""});
    const [angebotData,setAngebotData] = useState({id:"", user_id:"",modulname:"",strasse_hausnummer:""});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
          .get("/dashboard/gehwegabsenkungmodul")
          .then((response) => {
            setAngebotData({...response.data});
            setLoading(false);
            console.log(response.data);
          })
          .catch(error=>{
            setErrorState({...error.data});
              
          });
        return () => {};
      }, []);

      
      if(loading){return (<div>    <Spinner animation="border"></Spinner>
      </div>)}else
    return (
      
        <div>
            <Row>
                <Col>
                <div>
                <h5>Projektnummer:</h5>
                <p>{angebotData.id}</p>
                <h5>Projekt:</h5>
                <p>{angebotData.strasse_hausnummer}</p>
                <h5>Baumodulname</h5>
                <p>{angebotData.modulname}</p>
                <h5>Dokumente:</h5>
                <p><FontAwesomeIcon icon={faFileDownload}/> Angebot herunterladen</p>
                </div>
                
                </Col>
                <Col>
                <div>
                <h5>Aktionen:</h5>
                <div>   
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
