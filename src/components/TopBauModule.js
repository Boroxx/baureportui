import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, ListGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

function TopBauModule(props) {
    
  const handleListClick = (item) => {
    console.log(item);
  };

  if (!props.fetchLoaded.topbaumodule)
    return (
      <Container className="bg-light rounded p-3">
        <Spinner animation="border"></Spinner>
      </Container>
    );
  else {
    return (
      <Container className="bg-light rounded p-3">
        <h2 className="">Top Baumodule</h2>

        <ListGroup>
          {props.modulInfoData.map((item, key) => {
            return (
              <Link to={`/baumodul/${item.id}`}>
                <ListGroup.Item key={key} action variant="secondary">
                  {item.name}
                </ListGroup.Item>
              </Link>
            );
          })}
        </ListGroup>
      </Container>
    );
  }
}

export default TopBauModule;
