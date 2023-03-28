import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import Familia from "../../Assets/Direito-de-Familia.jpg";
import Trabalho from "../../Assets/Direito-do-Trabalho.jpg";
import Zesiane from "../../Assets/zesiane.jpeg";
import Vanessa from "../../Assets/vanessa.jpeg";
import "./index.scss"

const Hero = () => {
    return(
    <div className="backgroud">
        <section className="backgroud-a">
            <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Familia}
                alt="First slide"
                />
                <Carousel.Caption>
                <h1>Direito de Familia</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Trabalho}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h1>Direito do Trabalho</h1>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </section>
        <section className="pt-4 pb-4">
            <Container>
                <Row className="d-flex justify-content-center " xs="auto">
                    <Col className="mt-4">
                        <Card style={{ width: '20rem', height: '15rem' }}>
                        <Card.Body>
                            <Card.Title>Nossa Equipe</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Instagram</Card.Link>
                            <Card.Link href="#">Facebook</Card.Link>
                        </Card.Body>
                        </Card>                        
                    </Col>
                    <Col className="mt-4">
                        <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={Vanessa} />
                        <Card.Body>
                            <Card.Title>Vanessa Pessoa</Card.Title>
                            <Card.Text>
                            {/* Some quick example text to build on the card title and make up the
                            bulk of the card's content. */}
                            </Card.Text>
                        </Card.Body>
                        </Card>                    
                    </Col>
                    <Col className="mt-4">
                        <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={Zesiane} />
                        <Card.Body>
                            <Card.Title>Zesiane Ribeiro</Card.Title>
                            <Card.Text>
                            {/* Some quick example text to build on the card title and make up the
                            bulk of the card's content. */}
                            </Card.Text>
                        </Card.Body>
                        </Card>                     
                    </Col>
                </Row>
            </Container>
            </section>
    </div>    
    );
}  
export default Hero;    