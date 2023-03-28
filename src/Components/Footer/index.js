import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "../../Assets/logofooter.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./index.scss";

const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="text-center py-1">
                    <Col xs={12} lg={6} className="text-lg-start  mb-lg-0">
                        <Image src={logo}/>
                    </Col>
                    <Col xs={12} lg={6} className="fs-1 pt-3 d-flex align-items-center justify-content-center justify-content-lg-end">
                        <FaFacebook className="me-3" color="#B8860B"/>
                        <FaInstagram className="me-3" color="#B8860B"/>
                        <FaYoutube color="#B8860B"/>
                    </Col>               
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;