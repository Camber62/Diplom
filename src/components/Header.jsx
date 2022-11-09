import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
////background-color: rgb(74,123,66)
////background-color: rgb(57,50,48)
const Header = (props) => {

    return (
        <>
                <Navbar collapseOnSelect expand="lg" className="bgNavbar" variant="dark">
                    <Container className="container-fluid">
                        <Navbar.Brand>Web</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsev-navbar-nav"/>
                        <Navbar.Collapse id="responsev-navbar-nav" className="justify-content-between">

                            <Nav className="mr-auto ">
                                <Nav.Link href="/#" title="catalog"><a href="#AboutUs" className="yacor">О НАС</a></Nav.Link>
                                <Nav.Link href="/#" title="catalog"><a href="#catalog" className="yacor">КАТАЛОГ</a></Nav.Link>
                                <Nav.Link href="/#" title="catalog"><a href="/#Contacts" className="yacor">КОНТАКТЫ</a></Nav.Link>
                                <Nav.Link href="/#" title="catalog"><a href="#blog" className="yacor">БЛОГ</a></Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/#" title="catalog"><a href="/#form" className="yacor">ДОСТАВКА И ОПЛАТА</a></Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </>
    )
}
export default Header