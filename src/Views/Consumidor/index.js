import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsCashCoin, BsSignStopFill } from "react-icons/bs";
import { FaHandHoldingUsd,FaSadCry } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import {FcDebt} from "react-icons/fc";

const Consumidor = () => {
    return(
        <Container className="text-center">
            <h2 className="pt-3">Precisa de uma Advogada Experiente na área de Direito do Consumidor?</h2>
            <h4 className="pt-4">Somos especialistas em Direito do Consumidor</h4>
            <h4 className="pt-4">Descubra como resolver seu problema e ainda receber uma potencial indenização, fazemos a análise do seu caso em poucos minutos. Um de nossos advogados irá te atender e entender o seu caso, com uma solução rápida.</h4>
            <h1 className="pt-3">Nossos Serviços</h1>
            <Row className="mt-4">
            <Col className="mt-4 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <FaSadCry className="mt-3 align-self-center" size={100} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Caiu em golpe</Card.Title>
                            <Card.Text>
                                Nos casos em que o consumidor não tiver culpa, a empresa ou o banco devem se responsabilizar pelos prejuízos causados.
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>
                <Col className="mt-4 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <FaHandHoldingUsd className="mt-3 align-self-center" size={100} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Medicamentos e tratamentos de alto custo</Card.Title>
                            <Card.Text>
                                Se você necessita de algum destes, conte comigo. Encaro de perto a necessidade de ter medicamentos de alto custo, requerendo de Planos de Saúde ou do SUS, por exemplo, para AME, Autismo, Trombose, Doenças Raras. Entre outras!
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>
                <Col className="mt-4 mb-3 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <MdLocalPharmacy className="mt-3 align-self-center" size={150} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Planos de saúde</Card.Title>
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
                            <Card.Title>Venda casada</Card.Title>
                            <Card.Text>
                            Quando você for pedir um empréstimo e o gerente exigir que você contrate um seguro ou título de capitalização você tem direito de rejeitá-lo. Ele não é obrigatório, isso é venda casada!
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>
                <Col className="mt-4 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <BsCashCoin className="mt-3 align-self-center" size={100} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Produto com preços diferentes</Card.Title>
                            <Card.Text>
                                Você sabia que se houver dois valores diferentes para uma mesma mercadoria, o menor prevalece? Mas, na ausência de preços, o consumidor não tem o direito de levar o item de graça.
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>
                <Col className="mt-4 mb-3 text-center">
                <Card style={{ width: '25rem', height: '20rem' }}>
                        <FcDebt className="mt-3 align-self-center" size={150} color="#B8860B" />
                        <Card.Body>
                            <Card.Title>Cadastro de inadimplente</Card.Title>
                            <Card.Text>
                                Caso o consumidor tenha seu nome inscrito no cadastro de inadimplentes sem justa causa, sem aviso prévio ou com informações incorretas, a empresa que requisitou a inclusão pode ser responsabilizada por danos morais e materiais. 
                            </Card.Text>
                        </Card.Body>
                        </Card>                
                </Col>                                
            </Row>            
        </Container>
    );
};

export default Consumidor;