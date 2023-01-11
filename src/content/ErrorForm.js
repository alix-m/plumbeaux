import React from "react";
import { Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import arrow from "../assets/arrow-right.svg";
import SectionHeading from "../components/SectionHeading";

const ErrorForm = () => {
  const sendMail = (mail) => {
    console.log(mail);
    fetch("/send", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mail),
    }).then((res) => {
      console.log(res);
      return res.json();
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, name, file, checkbox, description } = e.target.elements;

    let mail = {
      email: email.value,
      name: name.value,
      file: file.value,
      checkbox: checkbox.value,
      description: description.value,
    };

    sendMail(mail);
  };

  return (
    <Container className="section-container">
      <SectionHeading text="Submit Error Logs" />
      <Row>
        <Col xl={3} lg={3} />
        <Col xl={6} className="error-form-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
          semper nulla. Etiam et ligula erat. Donec in elit non elit tempor
          feugiat. Fusce nunc nunc, efficitur eget tempor id, suscipit ac velit.
        </Col>
      </Row>
      <Row>
        <Col xl={3} lg={3} />
        <Col xl={6} className="error-form-text">
          <a href="@">
            <img id="arrow-icon" src={arrow} />
            How do I find log files?
          </a>
        </Col>
      </Row>
      <Col xl={3} lg={3} />
      <Row>
        <Col xl={3} lg={3} />
        <Col xl={6}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xl={6} lg={6} md={6}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email (required)</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required/>
                </Form.Group>
              </Col>
              <Col xl={6} lg={6} md={6}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name/alias (required)</Form.Label>
                  <Form.Control type="text" placeholder="Enter name/alias" required/>
                </Form.Group>
              </Col>
              <Col xl={6} />
            </Row>
            <Row>
              <Col xl={6} lg={6}>
                <Form.Group controlId="file" className="mb-3">
                  <Form.Label>Error log (required, .txt files only)</Form.Label>
                  <Form.Control type="file" accept=".txt" required/>
                </Form.Group>
              </Col>
              <Col id="error-form-check" xl={6} lg={6} md={6}>
                <Form.Check
                  type="checkbox"
                  id="checkbox"
                  label="It is okay to contact me (optional)"
                />
              </Col>
            </Row>
            <Row>
              <Col xl={12} md={12}>
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Description of error (required)</Form.Label>
                  <Form.Control as="textarea" rows={3} required/>
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorForm;
