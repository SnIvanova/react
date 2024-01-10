import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <Card
    style={{
      width: '18rem',
      border: `2px solid ${selected ? '#ff0000' : '#ccc'}`, 
      boxShadow: selected ? '0 0 10px rgba(255, 0, 0, 0.5)' : 'none', 
      transition: 'border 0.3s, box-shadow 0.3s', 
    }}
      onClick={toggleSelected}
  >
    <Card.Img variant="top" src={book.img} alt={`Cover of ${book.title}`} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
    </Card.Body>
  </Card>
  );
};

export default SingleBook;
