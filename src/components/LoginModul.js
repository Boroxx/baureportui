import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

function LoginModul(props) {
  //Stores Authenticationdata for Submit
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  //Render  Dashboard Component if token is in LocalStorage
  const [rerender, setRerender] = useState(false);

  const [loginError, setLoginError] = useState(false);
  //Preserving loginData in State
  const handleLoginData = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  /*Handle Authentication and Setting JWT into localStorage*/
  const handleLogin = (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify({
      username: loginData.name,
      password: loginData.password,
    });
    axios({
      method: "post",
      url: "/authenticate",
      data: jsonData,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        if (response) {
          localStorage.setItem("auth", response["data"].jwt);
          setRerender(true);
        }
      })
      .catch(function (response) {
        //handle error
        setLoginError(true);
      });
  };

  return (
    <Container className="bg-light mt-5 p-3">
      <h3>BauReport V1</h3>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Geben Sie ihre Email ein."
            name="name"
            onChange={handleLoginData}
          />
          <Form.Text className="text-muted">
            Ihre Email ist bei uns sicher und wird an keinen Dritten
            weitergereicht.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Passwort</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleLoginData}
          />
        </Form.Group>

        <Button variant="dark" type="submit" onClick={handleLogin}>
          Anmelden
        </Button>

        <Button variant="info" type="submit" className="float-right">
          Jetzt Registrieren
        </Button>
      </Form>
      {rerender && <Redirect to="/dashboard" />}
      {loginError && (
        <div className="mt-5 p-2 alert-danger">
          Falscher Benutzername oder Passwort.
        </div>
      )}
    </Container>
  );
}

export default LoginModul;
