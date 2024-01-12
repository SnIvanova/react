import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyNav from './component/MyNav';
import MyFooter from './component/MyFooter';
import Welcome from './component/Welcome';
import AllTheBooks from './component/AllTheBooks';
import SingleBook from './component/SingleBook';
import CommentArea from './component/CommentArea';

import fantasyBooks from './books/fantasy.json'; 
import horrorBooks from './books/horror.json';   
import romanceBooks from './books/romance.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };


  return (
    <div className="App">
      <MyNav />
      <Welcome />
      
      <Container fluid>
{/*     <AllTheBooks category="Fantasy" books={fantasyBooks} />
        <AllTheBooks category="Horror" books={horrorBooks} />
        <AllTheBooks category="Romance" books={romanceBooks} /> */}
      <Row>
          <Col md={6}>
          <AllTheBooks books={fantasyBooks} onBookSelect={handleBookSelect} />
          </Col>
          <Col md={6}>
          {selectedBook ? (
              <>
                
                <CommentArea book={selectedBook} />
              </>
            ) : (
              <div className="text-center mt-4">
                <h5>Seleziona un libro dalla griglia a sinistra</h5>
              </div>
            )}
          </Col>
        </Row>
        
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
