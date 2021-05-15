import {
  faChevronCircleLeft,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  const handleDialogStateForward = () => {
    if (dialogState < MAXDIALOG) setDialogState(dialogState + 1);
  };
  const handleDialogStateBackwards = () => {
    if (dialogState >= 0) setDialogState(dialogState - 1);
  };

  const handleFaq = () => setFaqState(!faqState);

  return (
    <Container fluid className="p-0">
      {dialogState === 0 && (
        <Container className="bg-light my-4 p-3">
          <h5 className="">Wo sollen wir ihr Bauvorhaben durchführen?</h5>

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
                placeholder="Möchengladbach 41199"
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
                Diese Daten werden vorläufig bis das Projekt abgeschlossen ist
                auf Portly's Datenbank gespeichert.
              </p>

              <p>
                Aus den von ihnen eingebenen Daten wird dann ein faires Angebot
                von unseren Ingenieuren erstellt, welches Sie in Ihrem
                User-Dashboard unter der Spalte Übersicht finden können.
              </p>

              <p>
                Hierbei handelt es sich um ein unverbindliches Angebot was wir
                Ihnen kostenlos erstellen, wie Sie dann mit dem Angebot
                weiterverfahren, bleibt Ihnen überlassen.
              </p>

              <p>
                Damit Sie schnellstmöglich Ihr Angebot erhalten müssen Sie
                allerdings auch eine Kleinigkeit tun.
              </p>
              <p>
                Wir benötigen die Maße ihres Gewehges , aber keine Angst
                Portly’s Assistent hilft Ihnen hierbei. Schnappen Sie sich
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
                label="Pöller"
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
                Um das Bauvorhaben durchzuführen muss Ihnen durch die Gemeinde
                eine Freigabe erteilt worden sein. Diese müssen sie hier
                hochladen.
              </p>

              <b>Vorgarten?</b>
              <p>
                Um besser kalkulieren zu können müssen Wir wissen ob der Gehweg
                mit einem Vorgarten abschließt.
              </p>

              <b>Hindernisse?</b>
              <p>
                Da ein größerer Arbeitsaufwand ensteht bitten wir Sie hier die
                Hindernisse für das Bauvorhaben anzukreutzen. Falls es keine
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
                <b>Hier benötigen wir ein Foto in Längsansicht ihres Gehwegs</b>
              </Form.Label>

              <Form.File
                id="custom-file"
                label="Längsansicht des Gehwegs"
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
                Um das Bauvorhaben durchzuführen muss Ihnen durch die Gemeinde
                eine Freigabe erteilt worden sein. Diese müssen sie hier
                hochladen.
              </p>

              <b>Vorgarten?</b>
              <p>
                Um besser kalkulieren zu können müssen Wir wissen ob der Gehweg
                mit einem Vorgarten abschließt.
              </p>

              <b>Hindernisse?</b>
              <p>
                Da ein größerer Arbeitsaufwand ensteht bitten wir Sie hier die
                Hindernisse für das Bauvorhaben anzukreutzen. Falls es keine
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
          <Button variant="success">Angebot anfragen</Button>

          <Button onClick={handleFaq} className="float-right" variant="dark">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </Button>
        </Container>
      )}
    </Container>
  );
}

export default GehwegModulDialog;
