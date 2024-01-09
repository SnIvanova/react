import React, { useState, useEffect } from 'react';
import { Container, Row, Form, FormControl, Button, Collapse } from 'react-bootstrap';
import SingleBook from './SingleBook';

const BookList = ({ books, category }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchQuery, books]);

  const getSearchQuery = query => {
    setSearchQuery(query);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <Row className="justify-content-between align-items-center mb-3">
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search by title"
            className="mr-sm-2 m-2"
            onChange={e => getSearchQuery(e.target.value)}
          />
          <Button variant="outline-success p-2 m-2">Search</Button>
        </Form>
        <Button variant="link" onClick={toggleExpand} className="text-decoration-none">
          {expanded ? 'Collapse' : 'Expand'} {category}
        </Button>
      </Row>
      <Collapse in={expanded}>
        <div>
          <Row className="justify-content-around">
            {filteredBooks.map((book, index) => (
              <SingleBook key={index} book={book} />
            ))}
          </Row>
        </div>
      </Collapse>
    </Container>
  );
};

export default BookList;
