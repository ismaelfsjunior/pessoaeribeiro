import React from "react";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import './index.scss';
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

const Navigation = () => (
    <div>
        <Navbar variant="" expand="lg">
            <Container >
                <Link to={'/'}>
                    <Navbar.Brand>
                    <img
                        src={logo}
                        width="100"
                        className="Navbarlogo"
                        alt="PR"
                    />            
                    </Navbar.Brand>                
                </Link>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav > 
                    <Link to={'/'}>
                        <Button variant="link" className="nav-link">Inicio</Button>
                    </Link>                    
                    <Link to={'/Familia'}>
                        <Button variant="link" className="nav-link">Direito da Familia</Button>
                    </Link>  
                    <Link to={'/Trabalho'}>
                        <Button variant="link" className="nav-link">Direito do Trabalho</Button>
                    </Link>    
                    <Link to={'/Consumidor'}>
                        <Button variant="link" className="nav-link">Direito do Consumidor</Button>
                    </Link>                      
                    <Link to={'/Contato'}>
                        <Button variant="link" className="nav-link">Contato</Button>
                    </Link>                                                                           
                </Nav>
                </Navbar.Collapse>                                                            
            </Container>   
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>    
    </div>
);

export default Navigation;