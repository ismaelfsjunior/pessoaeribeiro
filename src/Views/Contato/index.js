import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logocontato from "../../Assets/logocontato.png";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import "./index.scss"
const Contato = () => {
    return(
        <div className="contato">
        <Container>
            <Row>
                <Col>
                    <img
                        className="d-block w-100"
                        src={logocontato}
                        alt=""
                    />
                </Col>
            </Row>
            <Row xs={12} lg={2} className="contato-idd  d-flex justify-content-center">
                <Row className="contato-id mt-2">
                    <Col >
                        <h1>VANESSA PESSOA DE LIMA</h1> 
                        <h1>OAB/MA 22.135</h1> 
                        <h2><FaPhoneAlt className="me-3" color="#B8860B"/>99 9 9156 2514</h2>
                        <h3><FaInstagram className="me-3 fs-1" color="#B8860B"/>@vanessapessoalima</h3>                            
                    </Col>
                </Row>
                <Row className="contato-id mt-2">    
                    <Col >
                        <h1>ZESIANE RIBEIRO SERGIO DE SOUSA</h1>  
                        <h1>OAB/MA 21.705</h1> 
                        <h2><FaPhoneAlt className="me-3" color="#B8860B"/>99 9 9220 1990</h2>
                        <h3><FaInstagram className="me-3 fs-1" color="#B8860B"/>@zesiane</h3> 
                    </Col>                
                </Row>
            </Row>
            <div>
                <div >
                    <h2>Rua João Lisboa n° 723, sala 1, Centro - Imperatriz-MA</h2>
                </div>
                <iframe 
                    title="pessaoeribeiro" 
                    width="100%" 
                    height="400"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d937.0973036563199!2d-47.47918944128739!3d-5.52546239367586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c55f07a20b1fdd%3A0xc875f2d1a5c6b3da!2sPessoa%20%26%20Ribeiro!5e0!3m2!1spt-BR!2sbr!4v1680030026194!5m2!1spt-BR!2sbr" 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0">
                </iframe>                    
            </div>

        </Container>
        </div>
    );
};

export default Contato;