import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./index.scss";
import Carteiradetrabalho from "../../Assets/carteiradetrabalho.jpg";
import Vinculotrabalhista from "../../Assets/vinculotrabalhista.jpg";
import Assedionotrabalho from "../../Assets/assedionotrabalho.jpg";
import { AiFillCaretRight } from "react-icons/ai";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Trabalho = () => {
    return(
    <>
        <div className="trabalho">
            <img
                className="d-block w-100"
                src={Carteiradetrabalho}
                alt=""
            />                
            <figcaption>Direito do Trabalho</figcaption>
        </div>
        <div className="trabalho-container">
            <Container>
                <Row>
                    <Col>
                        <img
                            className="d-block w-100"
                            src={Vinculotrabalhista}
                            alt=""
                        />                    
                    </Col>
                    <Col>
                        <p className="trabalho-container-p"><AiFillCaretRight color="#B8860B"/> Reconhecimento de vínculo trabalhista.</p>
                        <p><AiFillCaretRight color="#B8860B"/> Jornada de trabalho.</p>
                        <p><AiFillCaretRight color="#B8860B"/> Acidente ou adoecimento decorrente do trabalho.</p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <p className="trabalho-container-p"><AiFillCaretRight color="#B8860B"/> Assédio moral no ambiente de trabalho.</p>                 
                        <p><AiFillCaretRight color="#B8860B"/> Atraso ou inadimplência de salários e verbas rescisórias.</p>                   
                    </Col>
                    <Col>
                        <img
                            className="d-block w-100"
                            src={Assedionotrabalho}
                            alt=""
                        /> 
                    </Col>
                </Row>                
            </Container>
        </div>
        <FloatingWhatsApp {...{phoneNumber: "5599991562514",accountName: "Pessoa & Ribeiro",statusMessage: "Geralmente respondemos em 1 hora",chatMessage: "Olá, Como podemos ajudar?",placeholder: "Digite sua Mensagem..."}} />
    </>    
    );
};

export default Trabalho;