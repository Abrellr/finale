import React from "react";
import { Link } from "react-router-dom";
import { Background, GlobalStyle, TimeStamp } from "./style";
import {Button, Card, Container} from "react-bootstrap";
import logo from "../images/logoWhite.jpg";

export default function LandingPage({ assignNewQuoteIndex, selectedQuote }) {
  return (
    <div id="landing">
      <GlobalStyle />
      <Background>
        <TimeStamp>
        <Container fluid >
          <Card className="motivation text-center" style={{backgroundColor: "transparent"}}>
            <Card.Body>
              <Card.Text style={{border: "none"}}>
              <h4 style={{color: "#100E14", fontWeight: "900"}}>{selectedQuote.quote}</h4>
              </Card.Text>
              <Button variant="link" onClick={assignNewQuoteIndex}>New quote</Button>
            </Card.Body>
          </Card>
          </Container>
          <br />
          <img src={logo} alt="logo" style={{ width: "300px" }}></img>
          <br />
          <Link to="/login">
            <Button variant="primary" style={{ width: "200px" }}>
              Log In
            </Button>
          </Link>
          <br />
        </TimeStamp>
      </Background>
    </div>
  );
}
