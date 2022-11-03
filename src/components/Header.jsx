import React from 'react';
import {Navbar,Nav,Button} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Basket from "./Basket";


////background-color: rgb(74,123,66)
////background-color: rgb(57,50,48)
const Header = (props) => {

    return (
<>
        <Navbar collapseOnSelect expand="lg" className="bgNavbar" variant="dark">
            <Container className="container-fluid ">
            <Navbar.Brand>Web</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsev-navbar-nav"/>
            <Navbar.Collapse id="responsev-navbar-nav" className="justify-content-between">
                <Nav className="mr-auto ">
                    <Nav.Link><a href="#О НАС">О НАС</a></Nav.Link>
                    <Nav.Link><a href="#КАТАЛОГ">КАТАЛОГ</a></Nav.Link>
                    <Nav.Link><a href="#ДОСТАВКА И ОПЛАТА ">ДОСТАВКА И ОПЛАТА</a></Nav.Link>
                    <Nav.Link><a href="#КОНТАКТЫ">КОНТАКТЫ</a></Nav.Link>
                    <Nav.Link><a href="#БЛОГ ">БЛОГ </a></Nav.Link>
                </Nav>
                <Nav>
                    <Button onClick={Basket} variant="primary" className="mr-2">Корзина </Button>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>


</>

    )
}
export default Header