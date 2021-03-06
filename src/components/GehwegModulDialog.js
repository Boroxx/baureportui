import {
  faChevronCircleLeft,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

function GehwegModulDialog() {
  const MAXDIALOG = 4;
  const [dialogState, setDialogState] = useState(0);
  const [faqState, setFaqState] = useState(false);
  const [errorState, setErrorState] = useState({error:false,errormessage:""});
  const [successState, setSuccessState] = useState({success:false,successmessage:""});

  const [gehwegModulData, setGehwegModulData] = useState({
    baumodul: 1,
    strasse_nummer: "",
    stadt_plz: "",
    genehmigung: "",
    vorgarten: false,
    hinderniss: { laterne: false, poeller: false, kappe: false },
    anmerkungen: "",
    frontansicht: "",
    laengsansicht: "",
  });

  /**
   * Handles Pagination
   */
  const handleDialogStateForward = () => {
    if (dialogState < MAXDIALOG) setDialogState(dialogState + 1);
  };
  const handleDialogStateBackwards = () => {
    if (dialogState >= 0) setDialogState(dialogState - 1);
  };

  const handleFaq = () => setFaqState(!faqState);

  /**
   * Posting to /dashboard/gehwegabsenkung to create a ModulProject
   */
  const handleGehwegModulPost = (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("modulname", "Gehwegabsenkung");
    formData.append("strasse_hausnummer", gehwegModulData.strasse_nummer);
    formData.append("stadt_plz", gehwegModulData.stadt_plz);
    formData.append("genehmigung", gehwegModulData.genehmigung);
    formData.append("vorgarten", gehwegModulData.vorgarten);
    
    formData.append("frontansicht", gehwegModulData.frontansicht);
    formData.append("laengsansicht", gehwegModulData.laengsansicht);
    formData.append("anmerkung",gehwegModulData.anmerkungen);

    //Erstelle Hindernissliste aus Checkboxen
    const arrayHinderniss = Object.entries(gehwegModulData.hinderniss);
    const hindernissList = arrayHinderniss.filter(([key,value]) =>value==true ).map(([key,value])=> key);
    console.log(hindernissList);
    formData.append("hinderniss",hindernissList);

    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
 
    }
  axios.post("/dashboard/gehwegabsenkungmodul", formData,config).then((response)=>{
    
    if(response["status"]==200){
      setSuccessState({success:true , successmessage:"Angebot erfolgreich angefordert."});
    }
  
  }).catch((error)=>{
    setErrorState({...error.data})
  });
  }

  return (
    <Container fluid className="p-0">
      {dialogState === 0 && (
        <Container className="bg-light my-4 p-3">
          <h5 className="">Wo sollen wir ihr Bauvorhaben durchf??hren?</h5>

          <Form>
            <Form.Group>
              <Form.Label>Strasse,Hausnummer</Form.Label>
              <Form.Control
                type="text"
                placeholder="Musterstrasse. 40"
                value={gehwegModulData.strasse_nummer}
                onChange={(event) =>
                  setGehwegModulData({
                    ...gehwegModulData,
                    strasse_nummer: event.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Stadt, Postleitzahl</Form.Label>
              <Form.Control
                type="text"
                placeholder="M??chengladbach 41199"
                value={gehwegModulData.stadt_plz}
                onChange={(event) =>
                  setGehwegModulData({
                    ...gehwegModulData,
                    stadt_plz: event.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>
          </Form>

          {faqState && (
            <div>
              <h5>Sie haben noch Fragen?</h5>
              <p>
                Diese Daten werden vorl??ufig bis das Projekt abgeschlossen ist
                auf Portly's Datenbank gespeichert.
              </p>

              <p>
                Aus den von ihnen eingebenen Daten wird dann ein faires Angebot
                von unseren Ingenieuren erstellt, welches Sie in Ihrem
                User-Dashboard unter der Spalte ??bersicht finden k??nnen.
              </p>

              <p>
                Hierbei handelt es sich um ein unverbindliches Angebot was wir
                Ihnen kostenlos erstellen, wie Sie dann mit dem Angebot
                weiterverfahren, bleibt Ihnen ??berlassen.
              </p>

              <p>
                Damit Sie schnellstm??glich Ihr Angebot erhalten m??ssen Sie
                allerdings auch eine Kleinigkeit tun.
              </p>
              <p>
                Wir ben??tigen die Ma??e ihres Gewehges , aber keine Angst
                Portly???s Assistent hilft Ihnen hierbei. Schnappen Sie sich
                schonmal einen Zollstock und ein Notizblatt!.
              </p>
            </div>
          )}

          <Button onClick={handleDialogStateForward} variant="dark">
            Weiter
          </Button>
          <Button onClick={handleFaq} className="float-right" variant="dark">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </Button>
        </Container>
      )}

      {dialogState === 1 && (
        <Container className="bg-light my-4 p-3">
          <h5 className="">Bauinformationen</h5>

          <Form>
            <Form.Group>
              <Form.Label>
                <b>Genehmigung</b>
              </Form.Label>

              <Form.File
                id="custom-file"
                label="Genehmigung als PDF"
                data-browse="hochladen"
                onChange={(event) =>
                  setGehwegModulData({
                    ...gehwegModulData,
                    genehmigung: event.target.files[0],
                  })
                }
                custom
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>
                <b>Vorgarten</b>
              </Form.Label>
              <Form.Check
                onChange={(e) =>
                  setGehwegModulData({
                    ...gehwegModulData,
                    vorgarten: e.target.checked,
                  })
                }
                checked={gehwegModulData.vorgarten}
                label="Vorhanden"
              ></Form.Check>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                <b>Hindernisse</b>
              </Form.Label>
              <Form.Check
                label="Laterne"
                onChange={(e) =>
                  setGehwegModulData({
                    ...gehwegModulData,
                    hinderniss: {
                      ...gehwegModulData.hinderniss,
                      laterne: e.target.checked,
                    },
                  })
                }
                checked={gehwegModulData.hinderniss.laterne}
              ></Form.Check>
              <Form.Check
                label="P??ller"
                onChange={(e) =>
                  setGehwegModulData({
                    ...gehwegModulData,
                    hinderniss: {
                      ...gehwegModulData.hinderniss,
                      poeller: e.target.checked,
                    },
                  })
                }
                checked={gehwegModulData.hinderniss.poeller}
              ></Form.Check>
              <Form.Check
                onChange={(e) =>
                  setGehwegModulData({
                    ...gehwegModulData,
                    hinderniss: {
                      ...gehwegModulData.hinderniss,
                      kappe: e.target.checked,
                    },
                  })
                }
                checked={gehwegModulData.hinderniss.kappe}
                label="Wasser-/Gaskappe"
              ></Form.Check>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Weitere Anmerkungen</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={gehwegModulData.anmerkungen}
                onChange={(e) =>
                  setGehwegModulData({
                    ...gehwegModulData,
                    anmerkungen: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>

          {faqState && (
            <div>
              <h5>Sie haben noch Fragen?</h5>
              <b>Welche Genehmigung?</b>
              <p>
                Um das Bauvorhaben durchzuf??hren muss Ihnen durch die Gemeinde
                eine Freigabe erteilt worden sein. Diese m??ssen sie hier
                hochladen.
              </p>

              <b>Vorgarten?</b>
              <p>
                Um besser kalkulieren zu k??nnen m??ssen Wir wissen ob der Gehweg
                mit einem Vorgarten abschlie??t.
              </p>

              <b>Hindernisse?</b>
              <p>
                Da ein gr????erer Arbeitsaufwand ensteht bitten wir Sie hier die
                Hindernisse f??r das Bauvorhaben anzukreutzen. Falls es keine
                gibt bitte nichts ankreuzen.
              </p>
            </div>
          )}

          <Button
            className="mx-2"
            onClick={handleDialogStateBackwards}
            variant="dark"
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </Button>
          <Button onClick={handleDialogStateForward} variant="dark">
            Weiter
          </Button>
          <Button onClick={handleFaq} className="float-right" variant="dark">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </Button>
        </Container>
      )}

      {dialogState === 2 && (
        <Container className="bg-light my-4 p-3">
          <h5 className="">Daten zum berechnen des Angebotes</h5>

          <Form>
            <Form.Group>
              <Form.Label>
                <b>
                  Laden sie bitte in Foto in Frontansicht des Gehweges hoch.
                </b>
              </Form.Label>

              <Form.File
                id="custom-file"
                label="Frontansicht des Gehwegs"
                data-browse="hochladen"
                onChange={(event) =>
                  setGehwegModulData({
                    ...gehwegModulData,
                    frontansicht: event.target.files[0],
                  })
                }
                custom
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <b>Hier ben??tigen wir ein Foto in L??ngsansicht ihres Gehwegs</b>
              </Form.Label>

              <Form.File
                id="custom-file"
                label="L??ngsansicht des Gehwegs"
                data-browse="hochladen"
                onChange={(event) =>
                  setGehwegModulData({
                    ...gehwegModulData,
                    laengsansicht: event.target.files[0],
                  })
                }
                custom
              />
            </Form.Group>
          </Form>

          {faqState && (
            <div>
              <h5>Sie haben noch Fragen?</h5>
              <b>Welche Genehmigung?</b>
              <p>
                Um das Bauvorhaben durchzuf??hren muss Ihnen durch die Gemeinde
                eine Freigabe erteilt worden sein. Diese m??ssen sie hier
                hochladen.
              </p>

              <b>Vorgarten?</b>
              <p>
                Um besser kalkulieren zu k??nnen m??ssen Wir wissen ob der Gehweg
                mit einem Vorgarten abschlie??t.
              </p>

              <b>Hindernisse?</b>
              <p>
                Da ein gr????erer Arbeitsaufwand ensteht bitten wir Sie hier die
                Hindernisse f??r das Bauvorhaben anzukreutzen. Falls es keine
                gibt bitte nichts ankreuzen.
              </p>
            </div>
          )}

          <Button
            className="mx-2"
            onClick={handleDialogStateBackwards}
            variant="dark"
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </Button>
          <Button variant="success" onClick={handleGehwegModulPost}>Angebot anfragen</Button>

          <Button onClick={handleFaq} className="float-right" variant="dark">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </Button>

          {successState.success && <div className="alert-success mt-5 p-3"> {successState.successmessage}</div>}
          {errorState.error && <div className="alert-danger mt-5 p-3"> {errorState.errormessage}</div> }
        </Container>
      )}
    </Container>
  );
}

export default GehwegModulDialog;
