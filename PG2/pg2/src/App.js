import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MyNav from './component/MyNav';
import MyFooter from './component/MyFooter';
import Welcome from './component/Welcome';
import AllTheBooks from './component/AllTheBooks';
import fantasyBooks from './books/fantasy.json'; 
import horrorBooks from './books/horror.json';   
import romanceBooks from './books/romance.json';


function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <Container>
        <AllTheBooks category="Fantasy" books={fantasyBooks} />
        <AllTheBooks category="Horror" books={horrorBooks} />
        <AllTheBooks category="Romance" books={romanceBooks} />
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
