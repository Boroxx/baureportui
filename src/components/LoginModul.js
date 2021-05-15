import axios from "axios";
import React,{useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

function LoginModul() {
  const [redirect, setRedirect] = useState(false);
  const [loginData,setLoginData] = useState({
      name:"",
      password:""
  });

  const handleLoginData = (event)=>{
        setLoginData( {...loginData,[event.target.name]: event.target.value});
  }
  const handleLogin = (event) => {
    event.preventDefault();
    console.log(loginData);
    const formdata = new FormData();
    formdata.append("name", loginData.name);
    formdata.append("password", loginData.password);
    axios({
      method: "post",
      url: "/api/login",
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        if (response["status"] == 200) {
          setRedirect(true);
        }
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };
  return (
    <Container className="bg-light mt-5 p-3">
      <h3>BauReport V1</h3>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Geben Sie ihre Email ein." name="name" onChange={handleLoginData}/>
          <Form.Text className="text-muted">
            Ihre Email ist bei uns sicher und wird an keinen Dritten
            weitergereicht.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Passwort</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" onChange={handleLoginData} />
        </Form.Group>

        <Button variant="dark" type="submit" onClick={handleLogin}>
          Anmelden
        </Button>

        <Button variant="info" type="submit" className="float-right">
          Jetzt Registrieren
        </Button>
      </Form>
      {redirect && <Redirect to="/dashboard" />}
    </Container>
  );
}

export default LoginModul;
