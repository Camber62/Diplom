import {Route, Routes, Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import React from 'react';
import Slider from "./Slaider";
import CardElement from "./CardElement";
import AddCardsElement from "./AllCardsElement";
import {motion} from "framer-motion"


// const color_one= "rgb(57,50,48)"
const NavComponent = (props) => {
    const setBasket = props.setBasket
    const basket = props.basket
    const Serving = props.Serving
    const ServingDishes = props.ServingDishes
    const TeaStationsTrays = props.TeaStationsTrays
    const EndBoards = props.EndBoards

    const AllCardsServing = () => {
        return <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}><AddCardsElement basket={basket} setBasket={setBasket} elem={Serving}/></motion.div>
    }
    const AllCardsServingDishes = () => {
        return <AddCardsElement basket={basket} setBasket={setBasket} elem={ServingDishes}/>
    }
    const AllCardsTeaStationsTrays = () => {
        return <AddCardsElement basket={basket} setBasket={setBasket} elem={TeaStationsTrays}/>
    }
    const AllCardsEndBoards = () => {
        return <AddCardsElement basket={basket} setBasket={setBasket} elem={EndBoards}/>
    }


    const pageTransition = {
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 0,
            y: "-100%"
        }
    }
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col sm={4} md={4} lg={3}>
                        <Nav className="p-3 h-100 flex-column bg-white Rounded">
                            <div className="container_nav_catalog">
                                <p id="catalog">Каталог</p>
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

                                <Routes>

                                    <Route path="/" element={<Slider/>}/>

                                    <Route path="/Serving"
                                           element={<AllCardsServing/>}/>
                                    <Route path="/ServingDishes"
                                           element={<AllCardsServingDishes/>}/>
                                    <Route path="/TeaStationsTrays"
                                           element={<AllCardsTeaStationsTrays/>}/>
                                    <Route path="/EndBoards"
                                           element={<AllCardsEndBoards/>}/>
                                    <Route path="/:name" element={<CardElement/>}/>

                                </Routes>


                            </Nav>
                        </SimpleBar>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default NavComponent