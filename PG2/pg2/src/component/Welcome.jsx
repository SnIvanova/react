import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Welcome() {
  return (
    <Container>
      <Row className="justify-content-md-center m-4">
        <Col md="auto">
          <h1>Welcome</h1>
          <p>
            This is a simple hero unit.
          </p>
          
        </Col>
      </Row>
    </Container>
  );
}