import React from 'react';
import Container from 'react-bootstrap/Container';
import {Navbar, Nav} from "react-bootstrap";

import Logo from "../icons/Лого.png"

const Scroll =(event)=>{
    // event.preventDefault();

    window.scrollTo(0,0)
}






const Header = () => {
    return (
        <>


            <Navbar collapseOnSelect expand="lg" className="bgNavbar sticky-top">
                <Container className="container-fluid">
                    <Navbar.Brand href="responsev-navbar-nav"><img onClick={Scroll} className='logo' src={Logo} alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsev-navbar-nav"/>
                    <Navbar.Collapse className='justify-content-center' id="responsev-navbar-nav">
                            <Nav className='justify-content-center' defaultActiveKey="/home">
                                    <Nav.Link href="#catalog">КАТАЛОГ</Nav.Link>
                                    <Nav.Link href="#AboutUs" eventKey="link-1">О НАС</Nav.Link>
                                    <Nav.Link href="#blog" eventKey="link-2">БЛОГ</Nav.Link>
                                    <Nav.Link href="#form" eventKey="link-3">ДОСТАВКА И ОПЛАТА</Nav.Link>
                                    <Nav.Link href="#individualOrders" eventKey="link-4">ИНДМВИДУАЛЬНЫЙ ЗАКАЗ</Nav.Link>
                                <div>
                                    <Nav.Link href="#Contacts" eventKey="link-5">КОНТАКТЫ</Nav.Link>
                                </div>
                            </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header