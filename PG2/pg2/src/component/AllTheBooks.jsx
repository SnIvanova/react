import { Container, Card, Row } from 'react-bootstrap';
import fantasyBooks from '../books/fantasy.json';

let fantasy = fantasyBooks;
console.log(fantasy);

export default function AllTheBooks() {
    return (
        <Container>
            <h2 className='text-center my-3'>Fantasy</h2>
            <Row className='gap-3 justify-content-between'>
                {fantasy.map((book => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>{book.author}</Card.Text>
                            {}
                        </Card.Body>
                    </Card>
                )))}
            </Row>
        </Container>
    );
}
