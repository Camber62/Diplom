import {Route, Routes, Link} from "react-router-dom";
import CardElement from "./components_nav/CardElement";
import EndBoard from "./components_nav/AllCardsElement";
import Slider from "./components_nav/Slaider";
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
// const color_one= "rgb(57,50,48)"

const Main = (props) => {
    const Serving = props.Serving
    const ServingDishes = props.ServingDishes
    const TeaStationsTrays = props.TeaStationsTrays
    const EndBoards = props.EndBoards


    return (
        <>
            <Container className="max_W_Nav">
                <Row className="mt-5">
                    <Col className="p-0 pr-3" sm={4} md={4} lg={3}>
                        <Nav className="pl-3 h-100 flex-column bg-white Rounded">
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
                        <SimpleBar style={{maxHeight: 550}}>
                            <Nav className="Rounded  bg-white ">
                                <Routes>
                                    <Route path="/" element={<Slider />}/>

                                    <Route path="/Serving" element={<EndBoard elem={Serving}/>}/>
                                    <Route path="/ServingDishes" element={<EndBoard elem={ServingDishes}/>}/>
                                    <Route path="/TeaStationsTrays" element={<EndBoard elem={TeaStationsTrays}/>}/>
                                    <Route path="/EndBoards" element={<EndBoard elem={EndBoards}/>}/>
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
export default Main