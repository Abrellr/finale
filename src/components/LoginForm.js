import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import "./LoginForm.scss";

export default function LoginForm(props) {
  // Calling useState() method with empty string (= initial value of login variable)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        const data = response.data;
        console.log(data)
      })
      .catch((error) => {
        return alert("Invalid username or password");
      });
  };

  return (
    <div className="login-form">
      <Row className="justify-content-center">
        <Col>
          <Container className="container login-container border border-light shadow p-3 mb-5 rounded py-3 px-3">
            <h3 className="pb-2">Log in</h3>
            <Form className="login-form">
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  autoComplete="off"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  autoComplete="off"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Row className="justify-content-center">
                <Link to={"/createProject"}> 
                <Button
                  className="login-button mr-3 ml-3"
                  variant="primary"
                  type="submit"
                  block
                  //onClick={handleLogin}
                >
                  Login
                </Button>
                </Link>
              </Row>
            </Form>
          </Container>
          <Container className="mt-4">
            <Row className="d-flex align-items-center justify-content-center">
              <span>Don't have an account? Click here to</span>
              <Link to={"/register"}>
                <Button
                  variant="link"
                  className="sign-up-link btn-lg"
                  type="submit"
                >
                  Sign up
                </Button>
              </Link>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

LoginForm.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
};
