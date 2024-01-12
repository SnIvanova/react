import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleBook = ({ book, onBookSelect }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    const newSelected = !selected;
    setSelected(newSelected);
    onBookSelect(newSelected ? book : null);
  };

  return (
    <Col >
      <Card
        
        style={{
          cursor: 'pointer',
          border: `2px solid ${selected ? '#ff0000' : '#ccc'}`,
          boxShadow: selected ? '0 0 10px rgba(255, 0, 0, 0.5)' : 'none',
          transition: 'border 0.3s, box-shadow 0.3s',
        }}
        onClick={toggleSelected}
      >
        <Card.Img variant="top" src={book.img} alt={`Cover of ${book.title}`} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.text}</Card.Text>
        </Card.Body>
        {selected }
      </Card>
    </Col>
  );
};

export default SingleBook;
