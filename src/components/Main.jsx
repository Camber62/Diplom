import {Route, Routes, Link} from "react-router-dom";
import CardElement from "./components_nav/CardElement";
import AddCardsElement from "./components_nav/AllCardsElement";
import Slider from "./components_nav/Slaider";
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import React, {useState} from 'react';
// import {AnimatePresence} from "framer-motion"
import { TransitionGroup, CSSTransition } from 'react-transition-group';




// const color_one= "rgb(57,50,48)"
const Main = (props) => {

    const [basket, setBasket] = useState([])   //Корзина
    const Serving = props.Serving
    const ServingDishes = props.ServingDishes
    const TeaStationsTrays = props.TeaStationsTrays
    const EndBoards = props.EndBoards




    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col sm={4} md={4} lg={3}>
                        <Nav className="p-3 h-100 flex-column bg-white Rounded">
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
                    <Col sm={8} md={8} lg={9} className="p-0 ">
                        <SimpleBar style={{maxHeight: 600}}>
                            <Nav className="Rounded  bg-white ">
                                {/*<AnimatePresence>*/}
                                {/*<TransitionGroup>*/}
                                {/*    <CSSTransition*/}
                                {/*        // key={location.key}*/}
                                {/*        classNames='slide'*/}
                                {/*        timeout={1000}*/}
                                {/*    >*/}
                                    <Routes>

                                    <Route path="/" element={<Slider/>}/>
                                    <Route path="/Serving"
                                           element={<AddCardsElement basket={basket} setBasket={setBasket}
                                                                     elem={Serving}/>}/>
                                    <Route path="/ServingDishes"
                                           element={<AddCardsElement basket={basket} setBasket={setBasket}
                                                                     elem={ServingDishes}/>}/>
                                    <Route path="/TeaStationsTrays"
                                           element={<AddCardsElement basket={basket} setBasket={setBasket}
                                                                     elem={TeaStationsTrays}/>}/>
                                    <Route path="/EndBoards"
                                           element={<AddCardsElement basket={basket} setBasket={setBasket}
                                                                     elem={EndBoards}/>}/>
                                    <Route path="/:name" element={<CardElement/>}/>
                                </Routes>
                                {/*    </CSSTransition>*/}
                                {/*</TransitionGroup>*/}
                                {/*</AnimatePresence>*/}
                            </Nav>
                        </SimpleBar>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default Main