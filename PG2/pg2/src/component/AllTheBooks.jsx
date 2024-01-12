import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SingleBook from './SingleBook';

const AllTheBooks = ({ books, onBookSelect }) => {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Fantasy Books</h2>
      <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
        {books.map((book) => (
          <Col key={book.asin} className="mb-3">
            <SingleBook book={book} onBookSelect={onBookSelect} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
