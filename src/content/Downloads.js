import React from "react";
import { Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DownloadCard from "../components/DownloadCard";
import SectionHeading from "../components/SectionHeading";

const downloads = [
  {
    title: "Core Mod",
    update: "01/01/2023",
    text: "Some quick example text to build on the card title and make up the bulk of the card content.",
    info_url: "@info_url",
    download_url: "@download_url",
  },
  {
    title: "Addon 1",
    update: "01/01/2023",
    text: "Some quick example text to build on the card title and make up the bulk of the card content.",
    info_url: "@info_url",
    download_url: "@download_url",
  },
  {
    title: "Addon 2",
    update: "01/01/2023",
    text: "Some quick example text to build on the card title and make up the bulk of the card content.",
    info_url: "@info_url",
    download_url: "@download_url",
  },
];

const Downloads = props => {
  return (
    <Container className="section-container">
      <SectionHeading text="Downloads" />
      <Row id="grid-downloads" className="display-flex">
        {downloads.map((item, index) => {
          return (
            <Col xl={3} lg={4} md={6}>
              <DownloadCard item={downloads[index]}></DownloadCard>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Downloads;
