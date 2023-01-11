import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../assets/logo.png";
import icon_patreon from "../assets/icon_social_patreon.svg";
import icon_discord from "../assets/icon_social_discord.svg";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar-bg" fixed="top">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          height="32px"
          className="d-inline-block align-top"
          alt="Plumbeaux logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#downloads">Downloads</Nav.Link>
          <Nav.Link href="#support">Support</Nav.Link>
          <Nav.Link href="#errors">Submit Error Logs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className="me-auto justify-content-end">
        <Nav.Link href="https://www.patreon.com/lalamods">
          <img
            src={icon_patreon}
            height="26px"
            className="d-inline-block align-top nav-icon"
            alt="Patreon logo"
          />
        </Nav.Link>
        <Nav.Link href="#downloads">
          <img
            src={icon_discord}
            height="32px"
            className="d-inline-block align-top nav-icon"
            alt="Discord logo"
          />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
