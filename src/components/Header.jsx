import React from 'react';
import logo from "../icons/img.JPEG";
import {Navbar,Nav,Button} from "react-bootstrap";
// import {Link} from "react-router-dom";
////background-color: rgb(74,123,66)
////background-color: rgb(57,50,48)
const Header = () => {

    return (
<>
        <Navbar collapseOnSelect expand="lg" className="bgNavbar" variant="dark">
            <Navbar.Brand>Web</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsev-navbar-nav"/>
            <Navbar.Collapse id="responsev-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><a href="#О НАС">О НАС</a></Nav.Link>
                    <Nav.Link><a href="#КАТАЛОГ">КАТАЛОГ</a></Nav.Link>
                    <Nav.Link><a href="#ДОСТАВКА И ОПЛАТА ">ДОСТАВКА И ОПЛАТА</a></Nav.Link>
                    <Nav.Link><a href="#КОНТАКТЫ">КОНТАКТЫ</a></Nav.Link>
                    <Nav.Link><a href="#БЛОГ ">БЛОГ </a></Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="primary" className="mr-2">Корзина </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


</>

    )
}
export default Header