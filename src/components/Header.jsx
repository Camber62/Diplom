import React from 'react';
import Container from 'react-bootstrap/Container';
import {Navbar,Nav} from "react-bootstrap";


const Header = () => {
    return (
        <>


            <Navbar collapseOnSelect expand="lg" className="bgNavbar sticky-top">
            <Container className="container-fluid">
                <Navbar.Brand href="#" className="d-inline-block align-top">Web</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsev-navbar-nav"/>
                <Navbar.Collapse className="justify-content-around" id="responsev-navbar-nav" >

                <Nav     defaultActiveKey="/home" >
                        <Nav.Link href="#catalog">КАТАЛОГ</Nav.Link>
                        <Nav.Link href="#AboutUs" eventKey="link-1">О НАС</Nav.Link>
                        <Nav.Link href="#blog" eventKey="link-2">БЛОГ</Nav.Link>
                        <Nav.Link href="#form" eventKey="link-3">ДОСТАВКА И ОПЛАТА</Nav.Link>
                        <Nav.Link href="#form" eventKey="link-4">ИНДМВИДУАЛЬНЫЙ ЗАКАЗ</Nav.Link>
                    <div className="me-2"><Nav.Link href="#Contacts" eventKey="link-5">КОНТАКТЫ</Nav.Link></div>
                </Nav>
                </Navbar.Collapse>

            </Container>
            </Navbar>
        </>
    )
}
export default Header