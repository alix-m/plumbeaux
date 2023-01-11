import React from "react";
import { Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo_rom from "../assets/logo_rom.png";
import logo_du from "../assets/logo_du.png";

function Sulsul() {
  return (
    <Container>
      <Row>
        <Col lg={3} />
        <Col lg={6}>
          <p className="p-text">
            <h2>Sul sul</h2>
            <br />
            We are pleased to inform you that you have been accepted to
            Plumbeaux University of Magic.
            <br />
            <br />
            Please find enclosed a list of all necessary game packs and
            expansions:
          </p>
          <img className="pack-logo" src={logo_du} width="100" />
          <img className="pack-logo" src={logo_rom} width="100" />
          <p className="p-text">
            This mod <u>requires</u> <b>Discover University</b> <u>and</u>{" "}
            <b>Realm of Magic</b> in addition to the base game.
          </p>
        </Col>
        <Col lg={3} />
      </Row>
    </Container>
  );
}

export default Sulsul;
