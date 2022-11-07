import React from 'react';
import {Navbar, Nav, Button} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Basket from "./Basket";
// import {Anchor} from 'antd'
////background-color: rgb(74,123,66)
////background-color: rgb(57,50,48)
// const {Link} = Anchor
const Header = (props) => {

    return (
        <>
            {/*<Anchor>*/}
                <Navbar collapseOnSelect expand="lg" className="bgNavbar" variant="dark">
                    <Container className="container-fluid">
                        <Navbar.Brand>Web</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsev-navbar-nav"/>
                        <Navbar.Collapse id="responsev-navbar-nav" className="justify-content-between">

                            <Nav className="mr-auto ">
                                <Nav.Link href="/#" title="catalog"><a href="#catalog" className="yacor">О НАС</a></Nav.Link>
                                <Nav.Link href="/#" title="catalog"><a href="#form" className="yacor">КАТАЛОГ</a></Nav.Link>
                                <Nav.Link href="/#" title="catalog"><a href="/#" className="yacor">ДОСТАВКА И ОПЛАТА</a></Nav.Link>
                                <Nav.Link href="/#" title="catalog"><a href="/#" className="yacor">КОНТАКТЫ</a></Nav.Link>
                                <Nav.Link href="/#" title="catalog"><a href="#blog" className="yacor">БЛОГ</a></Nav.Link>
                            </Nav>
                            <Nav>
                                <Button onClick={Basket} variant="primary" className="mr-2 ant-ribbon-color-red"><a href="#form" className="yacor ">Корзина</a></Button>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            {/*</Anchor>*/}


        </>

    )
}
export default Header