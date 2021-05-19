import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import React from "react";
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";

function NavBar() {
  const handleLogout = () => {
    localStorage.removeItem("auth");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/dashboard">
        <Navbar.Brand>BauReport Dashboard</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline>
          <FormControl
            type="text"
            placeholder="Baumodule suchen..."
            className="mr-sm-2"
          />
          <Button variant="outline-success">
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </Button>
        </Form>
        <div className="ml-auto">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Profil</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>

            <Nav.Link as={Link} to="/logout" onClick={handleLogout}>
              {" "}
              Logout
            </Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
