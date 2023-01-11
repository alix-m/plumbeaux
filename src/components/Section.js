import React from "react";
import { Container } from "react-bootstrap";

import SectionHeading from "./SectionHeading";

const Section = (props) => {
  return (
    <Container className="section-container">
      <SectionHeading text={props.heading} />
      <span className="section-text">
        <center>Coming Soon</center>
      </span>
    </Container>
  );
};

export default Section;
