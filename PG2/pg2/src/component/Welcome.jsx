import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Welcome() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Welcome</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          
        </Col>
      </Row>
    </Container>
  );
}