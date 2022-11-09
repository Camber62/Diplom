import React from 'react';
import Container from 'react-bootstrap/Container';
import {Navbar,Nav,Button} from "react-bootstrap";


const Header = () => {
    return (
        <>


            <Navbar collapseOnSelect expand="lg" className="bgNavbar sticky-top">
            <Container className="container-fluid">
                <Navbar.Brand>Web</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsev-navbar-nav"/>
                <Navbar.Collapse id="responsev-navbar-nav"  className="justify-content-between link_nav">
                {/*    <Nav  className="mr-auto ">*/}
                {/*        <a href="#catalog" className="yacor">КАТАЛОГ</a>*/}
                {/*        <a href="#AboutUs" className="yacor">О НАС</a>*/}
                {/*        <a href="#blog" className="yacor">БЛОГ</a>*/}
                {/*        <a href="/#form" className="yacor">ДОСТАВКА И ОПЛАТА</a>*/}
                {/*        <a href="#form" className="yacor">ИНДМВИДУАЛЬНЫЙ ЗАКАЗ</a>*/}
                {/*    </Nav>*/}
                {/*    <Nav>*/}
                {/*        <a href="/#Contacts" className="yacor">КОНТАКТЫ</a>*/}
                {/*    </Nav>*/}

                <Nav variant="pills" defaultActiveKey="/home" >
                    <Nav.Item className="d-flex">
                        <Nav.Link href="#catalog">КАТАЛОГ</Nav.Link>

                        <Nav.Link href="#AboutUs" eventKey="link-1">О НАС</Nav.Link>

                        <Nav.Link href="#blog" eventKey="link-2">БЛОГ</Nav.Link>

                        <Nav.Link href="#form" eventKey="link-3">ДОСТАВКА И ОПЛАТА</Nav.Link>

                        <Nav.Link href="#form" eventKey="link-4">ИНДМВИДУАЛЬНЫЙ ЗАКАЗ</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#Contacts" eventKey="link-5">КОНТАКТЫ</Nav.Link>

                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>

            </Container>
            </Navbar>
        </>
    )
}
export default Header