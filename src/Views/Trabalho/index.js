import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Vanessa from "../../Assets/vanessa.jpeg";
import { BsCashCoin, BsSignStopFill } from "react-icons/bs";
import { FaPeopleArrows,FaHandHoldingUsd, FaPersonBooth } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

const Trabalho = () => {
    return(
        <Container className="text-center">
            <h2 className="pt-3">Precisa de uma Advogada Experiente na área de Direito do Trabalho?</h2>
            <h4 className="pt-4">Somos especialistas em Direito do Trabalho</h4>
            <h1 className="pt-4">Quem vai te atender</h1>
            <Row className="mt-3 mb-3">
                <Col className="mt-4 d-flex justify-content-center">
                        <Card style={{ width: '20rem', height: '25rem' }} >
                        <Card.Img variant="top" style={{ width: '20rem', height: '25rem' }} src={Vanessa}/>
                        </Card>                     
                </Col> 
                <Col className="mt-4 text-center">
                <Card style={{ width: '25rem', height: '15rem' }}>
                        <Card.Body>
                            <Card.Title>Vanessa Pessoa</Card.Title>
                            <Card.Text>
                                Advogada – OAB/ MA – 22.135, Pós Graduada em Direito do Trabalho e Processo do Trabalho, Pós Graduanda em Direito de Família e Sucessões.  
                                Atua na advocacia consultiva e contenciosa. Com experiência na condução de casos desde as fases pre-processuais, até as instâncias de julgamento final.
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>               
            </Row>
            <h1>Nossos Serviços</h1>
            <Row className="mt-4">
            <Col className="mt-4 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <MdEngineering className="mt-3 align-self-center" size={100} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Jornada de trabalho</Card.Title>
                            <Card.Text>
                                O trabalhador é a parte mais frágil e que precisa de mais proteção na relação com o seu empregador.
                                
                                Por isso a lei trabalhista foi criada e ser orientado por um advogado especialista pode aumentar as suas chances ao exigir o cumprimento dos seus direitos na justiça.
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>
                <Col className="mt-4 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <FaPeopleArrows className="mt-3 align-self-center" size={100} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Reconhecimento de vínculo trabalhista</Card.Title>
                            <Card.Text>
                                Não deixe que seus direitos trabalhistas sejam violados: Descubra como nossa equipe especializada pode ajudar a proteger seus interesses e garantir justiça no ambiente de trabalho!
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>
                <Col className="mt-4 mb-3 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <FaHandHoldingUsd className="mt-3 align-self-center" size={150} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Acidente ou adoecimento decorrente do trabalho</Card.Title>
                            <Card.Text>
                            Há situações de doenças profissionais como LER/DORT, doenças psquiátricas e outras que também são decorrentes das condições desfavoráveis no ambiente de trabalho. Tudo isso pode gerar em favor do trabalhador direito a indenizações
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>                                
            </Row>
            <Row className="mt-4">
            <Col className="mt-4 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <BsSignStopFill className="mt-3 align-self-center" size={100} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Assédio moral no ambiente de trabalho</Card.Title>
                            <Card.Text>
                            Assédio moral é quando as pessoas, constante e prolongadamente, são expostos a situações ridículas e humilhantes. Geralmente partem dos superiores hierárquicos e tem como alvo seus subordinados.
                            Estamos preparados para cuidar de todo esses transtornos no ambiente de trabalho.
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>
                <Col className="mt-4 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <BsCashCoin className="mt-3 align-self-center" size={100} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Atraso ou inadimplência de salários e verbas rescisórias</Card.Title>
                            <Card.Text>
                            Atrasos salariais reiterados e inadimplência total de verbas rescisórias geram direito a indenização.
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>
                <Col className="mt-4 mb-3 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <FaPersonBooth className="mt-3 align-self-center" size={150} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Desvio de função</Card.Title>
                            <Card.Text>
                                O acúmulo/desvio de função não encontra previsão expressa na ordem jurídica trabalhista. Para que fique caracterizado o acúmulo/desvio de função deve haver o exercício concomitante de duas funções substancialmente diversas.
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>                                
            </Row>            
        </Container>
    );
};

export default Trabalho;