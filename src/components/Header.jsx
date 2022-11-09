import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import Container from 'react-bootstrap/Container';

const Header = (props) => {

    return (
        <>
                <Navbar collapseOnSelect expand="lg" className="bgNavbar">
                    <Container className="container-fluid">
                        <Navbar.Brand>Web</Navbar.Brand>
                        {/*<Navbar.Collapse className="justify-content-between link_nav">*/}
                            <Nav className="mr-auto ">
                                <a href="#AboutUs" className="yacor">КАТАЛОГ</a>
                                <a href="#AboutUs" className="yacor">О НАС</a>
                                <a href="#catalog" className="yacor">БЛОГ</a>
                                <a href="/#Contacts" className="yacor">ДОСТАВКА И ОПЛАТА</a>
                                <a href="#blog" className="yacor">ИНДМВИДУАЛЬНЫЙ ЗАКАЗ</a>
                            </Nav>
                            <Nav>
                                <a href="/#form" className="yacor">КОНТАКТЫ</a>
                            </Nav>

                        {/*</Navbar.Collapse>*/}
                    </Container>
                </Navbar>
        </>
    )
}
export default Header