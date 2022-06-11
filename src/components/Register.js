import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
    sendrequest().then((res) => {
      if (user) {
        window.location.href = "/";
      } else {
        // show window alert 
        window.alert("User does not exist");
        alert("Error registering user");
      }});
  }

  const sendrequest = async () => {
    await axios.post("http://localhost:5000/cns/register", {
      email: user.email,
      password: user.password,
    }).then((res) => {
      console.log(user);
      setUser(user);
    }
    ).catch((err) => {
      console.log(err);
    }
    );
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={user.email}
            onChange={(e) => setUser({...user,email:e.target.value})}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user,password:e.target.value})}
          />
        </Form.Group>
        <Button className="mx-auto mt-2" size="lg" type="submit" variant="dark" onClick={handleSubmit}>
          Register
        </Button>
      </Form>
    </div>
  );
}