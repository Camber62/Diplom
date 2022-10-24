import React, {useState} from 'react';
import {Route, Routes, Link} from "react-router-dom";
import CardElement from "./components_nav/CardElement";
import EndBoard from "./components_nav/AllCardsElement";
import Slider from "./components_nav/Slaider";
import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// const color_one= "rgb(57,50,48)"
const Main = (props) => {
    const [path, setPath] = useState('');
const Serving=props.Serving
const ServingDishes=props.ServingDishes
const TeaStationsTrays=props.TeaStationsTrays
const EndBoards=props.EndBoards



    return (
        <>
            {/*<Container >*/}
                <Row className="mt-5">
                    <Col className="p-0 pr-3 " sm={4}>
                    <Nav  className="h-100 flex-column bg-white Rounded">
                        <div className="container_nav_catalog">
                            <p>Каталог</p>
                        </div>
                        <Link to="/">Home</Link>
                        <Link to="/Serving">Serving</Link>
                        <Link to="/ServingDishes">Serving Dishes</Link>
                        <Link to="/TeaStationsTrays">Tea Stations Trays</Link>
                        <Link to="/EndBoards">EndBoards</Link>
                    </Nav>
                </Col>
                    <Col sm={8} className="p-0">
                        <Nav className="Rounded  bg-white">
                            <Routes>
                                <Route path="/" element={<Slider/>}/>
                                <Route path="/Serving" element={<EndBoard setPath={setPath} elem={Serving}/>}/>
                                <Route path="/ServingDishes" element={<EndBoard setPath={setPath} elem={ServingDishes}/>}/>
                                <Route path="/TeaStationsTrays" element={<EndBoard setPath={setPath} elem={TeaStationsTrays}/>}/>
                                <Route path="/EndBoards" element={<EndBoard setPath={setPath} elem={EndBoards}/>}/>
                                <Route path="/:name" element={<CardElement/>}/>
                            </Routes>
                        </Nav>
                    </Col>
                </Row>
            {/*</Container>*/}
        </>
    );
};
export default Main