import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Zesiane from "../../Assets/zesiane.jpeg";
import { BsCashCoin,BsCashStack,BsBuildingFillLock } from "react-icons/bs";
import { FaPeopleArrows, FaHandshake } from "react-icons/fa";
import { GiStabbedNote } from "react-icons/gi";

const Familia = () => {
    return(
        <Container className="text-center">
            <h2 className="pt-3">Precisa de uma Advogada Experiente na área de Direito de Família?</h2>
            <h4 className="pt-4">Somos especialistas em Direito de Família</h4>
            <h1 className="pt-4">Quem vai te atender</h1>
            <Row className="mt-3 mb-3">
                <Col className="mt-4 d-flex justify-content-center">
                        <Card style={{ width: '20rem', height: '25rem' }} >
                        <Card.Img variant="top" style={{ width: '20rem', height: '25rem' }} src={Zesiane}/>
                        </Card>                     
                </Col> 
                <Col className="mt-4 text-center">
                <Card style={{ width: '25rem', height: '15rem' }}>
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
            <h1>Nossos Serviços</h1>
            <Row className="mt-4">
            <Col className="mt-4 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <BsCashCoin className="mt-3 align-self-center" size={100} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Pensão alimentícia</Card.Title>
                            <Card.Text>
                                Trabalhamos pela definição e regularização de uma pensão alimentícia justa e também na cobrança de parcelas de pensão atrasadas.
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>
                <Col className="mt-4 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <FaPeopleArrows className="mt-3 align-self-center" size={100} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Guarda compartilhada</Card.Title>
                            <Card.Text>
                                Seus filhos merecem um desfecho em que tenham convívio com os dois genitores. 
                                Se essa é a sua intenção em meio a uma separação, cuidaremos para que isso aconteça.
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>
                <Col className="mt-4 mb-3 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <BsCashStack className="mt-3 align-self-center" size={150} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Divórcio</Card.Title>
                            <Card.Text>
                            Rompimento legal e definitivo do vínculo de casamento civil. 
                            O processo legal de divórcio pode envolver questões como atribuição de pensão de alimentos, regulação de poder paternal, relação ou partilha de bens, regulação de casa de morada de família, embora estes acordos sejam complementares ao processo principal.
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>                                
            </Row>
            <Row className="mt-4">
            <Col className="mt-4 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <BsBuildingFillLock className="mt-3 align-self-center" size={100} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Inventário</Card.Title>
                            <Card.Text>
                            Quando ocorre o falecimento de uma pessoa que possui bens sucessores, é necessário fazer um procedimento judicial que levanta os valores (e dívidas) da herança.
                            Estamos preparados para cuidar de todo esse trabalho te oferecendo tranquilidade e descomplicação.
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>
                <Col className="mt-4 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <FaHandshake className="mt-3 align-self-center" size={100} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Partilha de bens</Card.Title>
                            <Card.Text>
                                Um patrimônio construído a dois precisa ser partilhado com justiça. Nosso escritório vai trabalhar para que isso aconteça.
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>
                <Col className="mt-4 mb-3 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <GiStabbedNote className="mt-3 align-self-center" size={150} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Testamento</Card.Title>
                            <Card.Text>
                            Por meio de um testamento, você garante que sua vontade seja cumprida em relação à divisão dos seus bens após o seu falecimento.
                            Nosso escritório te dará orientação durante todo o processo. Trabalhamos com sigilo.
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>                                
            </Row>            
        </Container>
    );
};

export default Familia;