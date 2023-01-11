import React from "react";
import "./App.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

import Navigation from "./Navigation";
import Sulsul from "./Sulsul";
import Section from "../components/Section";
import ErrorForm from "./ErrorForm";
import Downloads from "./Downloads";
import Banner from "../components/Banner";

function App() {
  return (
    <div className="App bg">
      <header className="App-header">
        <Navigation />
        <Container>
          <Row>
            <Col lg={3} />
            <Col lg={6}>
              <Banner />
            </Col>
            <Col />
            <Col lg={3} />
          </Row>
        </Container>
        <div className="white-bg shadow">
          <Sulsul />
        </div>
        <Container>
          <Row>
            <Col lg={3} />
            <Col lg={6}>
              <Section heading="Features" />
            </Col>
            <Col lg={3} />
          </Row>
        </Container>
        <Container>
          <Row>
            <Downloads />
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={3} />
            <Col lg={6}>
              <Section heading="Support" />
            </Col>
            <Col lg={3} />
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-md-center">
            <ErrorForm />
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
