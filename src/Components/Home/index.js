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
                        <Card style={{ width: '20rem', height: '22rem' }}>
                        <Card.Body>
                            <Card.Title>Nossa Equipe</Card.Title>
                            <Card.Text>
                                O Escritório Pessoa & Ribeiro está preparado para atender às transformações da sociedade  onde impactam diretamente o direito de sua população. 
                                Contamos com uma equipe de advogados parceiros, dessa forma atuando de maneira rápida e ambrangente com assessoria e consultoria jurídica em todo território nacional, por meio de estratégias para alcançamos as melhores soluções nas esferas Judicial e Extrajudicial.
                            </Card.Text>
                        </Card.Body>
                        </Card>                        
                    </Col>
                    <Col className="mt-4">
                        <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={Vanessa} />
                        <Card.Body>
                            <Card.Title>Vanessa Pessoa</Card.Title>
                            <Card.Text>
                                Advogada – OAB/ MA – 22.135, Pós Graduada em Direito do Trabalho e Processo do Trabalho, Pós Graduanda em Direito de Família e Sucessões.  
                                Atua na advocacia consultiva e contenciosa. Com experiência na condução de casos desde as fases pre-processuais, até as instâncias de julgamento final.
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
                                Advogada – OAB/ MA – 21.705, Pós Graduada em Direito Civil e Processo Cível, Pós Graduanda em Direito de Família e Sucessões.  
                                Advocacia voltada para a prestação de serviço de maneira rápida e efetiva, com soluções inovadoras e avançadas, visando sempre a satisfação do seu cliente.
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