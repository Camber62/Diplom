import React, {useState} from 'react';
import {Route, Routes, Link} from "react-router-dom";
import CardElement from "./components_nav/CardElement";
import EndBoard from "./components_nav/End_boards";
import Slider from "./components_nav/Slaider";
import logo from "../icons/img.JPEG"
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = () => {
    const [path, setPath] = useState('');
    const Servirovka = [
        {id: 0, name: "a", price: 123, about: "history", src: "../icons/lemur.jpg"},
        {id: 1, name: "b", price: 1132, about: "bcbb"},
        {id: 2, name: "c", price: 321, about: "scss"}
    ];
    const EndBoards = [
        {id: 0, name: "BOARD", price: 123, about: "board"},
        {id: 1, name: "qwerty", price: 1132, about: "Qwerty"},
        {id: 2, name: "Lasssy", price: 321, about: "Lasssy"},
    ]


    return (
        <>
            <Container>
                <Row><Col sm={2}>
                    <Nav className="flex-column">
                        <div className="container_nav_catalog">
                            <p>Каталог</p>
                        </div>
                        <Link to="/">- Home</Link>
                        <Link to="/Table">- ТОРЦЕВЫЕ ДОСКИ</Link>
                        <Link to="/qwe">- ЧАЙНЫЕ СТАНЦИИ</Link>
                        <Link to="/Favorite">- МЕБЕЛЬ И ИНТЕРЬЕР</Link>
                        <Link to="/Favorite">- ПОДАЧА И СЕРВИРОВКА БЛЮД/НАПИТКОВ</Link>
                        <Link to="/Favorite">- САЛФЕТНИЦЫ</Link>
                        <Link to="/Favorite">- ПОДСТАВКИ ДЛЯ СПЕЦИЙ</Link>
                        <Link to="/Favorite">- ТАБЛИЧКИ «РЕЗЕРВ СТОЛА»</Link>
                        <Link to="/Favorite">- ДЛЯ ПРИБОРОВ</Link>
                    </Nav>
                </Col>
                    <Col sm={10}>
                        <Nav>
                            <Routes>
                                <Route path="/" element={<Slider/>}/>
                                <Route path="/Table" element={<EndBoard setPath={setPath} elem={EndBoards}/>}/>
                                <Route path="/qwe" element={<EndBoard setPath={setPath} elem={Servirovka}/>}/>
                                <Route path={path} element={<CardElement/>}/>
                            </Routes>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default Main