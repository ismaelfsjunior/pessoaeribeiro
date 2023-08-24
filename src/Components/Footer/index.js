import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../Assets/logofooter.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./index.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="text-center py-1">
                    <Col xs={12} lg={6} className="text-lg-start  mb-lg-0">
                        {/* <Image src={logo}/> */}
                        <Link to={'/'}>
                        <img
                        src={logo}
                        width="100"
                        className="Navbarlogo"
                        alt="PR"
                        /> 
                        </Link>                       
                    </Col>
                    <Col xs={12} lg={6} className="fs-1 pt-3 d-flex align-items-center justify-content-center justify-content-lg-end">
                        <a href="https://www.instagram.com/pessoaeribeiro/"><FaFacebook className="me-3" color="#B8860B" /> </a>
                        <a href="https://www.instagram.com/pessoaeribeiro/"><FaInstagram className="me-3" color="#B8860B"  /></a>
                        {/* <FaYoutube color="#B8860B"/> */}
                    </Col>               
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;