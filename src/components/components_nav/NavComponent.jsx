import {Route, Routes, Link, useNavigate} from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'simplebar/dist/simplebar.min.css';
import React, {useState} from 'react';
import Slider from "./Slaider";
import CardElement from "./CardElement";
import AddCardsElement from "./AllCardsElement";
import {Button} from "react-bootstrap";
import chair from "../../icons/chair.jpg"
import endBoards from "../../icons/end boards.jpg"
import ServingImg from "../../icons/Serving.jpg"
import tea from "../../icons/tea stations.jpg"
import priceTags from "../../icons/price tags.jpg"
import platestags from "../../icons/platestags.jpg"
import servingDishes from "../../icons/serving dishes.jpg"


const NavComponent = (props) => {
    const setBasket = props.setBasket
    const basket = props.basket
    const Serving = props.Serving
    const ServingDishes = props.ServingDishes
    const TeaStationsTrays = props.TeaStationsTrays
    const EndBoards = props.EndBoards
    const [showContainerCol, setShowContainerCol] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
    const navigate = useNavigate()
    // const { name } = useParams();


    return (
        <>
            <Container fluid="md" className="p-0">
                <Row className="pt-3">
                    <Col sm={4} className="p-0">
                        <div className="mb-1 text-center container_nav_catalog Rounded text-white">
                            <h4 id="catalog">Каталог</h4>
                        </div>
                        <div className="pt-5 text-center"><h5>МАСТЕРСКАЯ ИЗДЕЛИЙ ИЗ НАТУРАЛЬНОГО ДЕРЕВА ДЛЯ ВАШЕГО
                            БИЗНЕСА</h5></div>
                    </Col>
                    <Col sm={8} className="p-0">{/*<SimpleBar style={{Height: 600}}>*/}
                        <Slider/>
                        {/*</SimpleBar>*/}
                    </Col>
                </Row>

                <Row className=" m-0 mt-5">

                    {showContainerCol ?
                        <Col sm={12} >
                            <p>В КАТАЛОГЕ ПРЕДСТАВЛЕННЫ ГОТОВЫЕ ФОРМЫ ИЗДЕЛИЙ ИЗ ДЕРЕВА.ЕСЛИ ЗДЕСЬ НЕТ ТОГО,ЧТО ВАМ
                                НУЖНО,ПЕРЕЙДИТЕ В РАЗДЕЛ ИДИВИДУАЛЬНЫЙ ЗАКАЗ</p>
                            <Nav className="p-3 ps-5 h-auto Rounded">
                                <div className='col-sm-3 text-center'><img src={servingDishes} className="m-auto w-75 h-75 d-block rounded"
                                                           alt="ServingImg"/> <Link onClick={() => {
                                    setShowContainerCol(false)
                                }} to="/ServingDishes">ПОДАЧА БЛЮД</Link></div>
                                <div className='col-sm-3 text-center'><img src={ServingImg} className="m-auto w-75 h-75 d-block rounded"
                                                           alt="ServingImg"/><Link
                                    onClick={() => {
                                        setShowContainerCol(false)
                                    }}
                                    to="/Serving">СЕРВИРОВКА СТОЛА</Link></div>
                                <div className='col-sm-3 text-center'><img src={priceTags} className="m-auto w-75 h-75 d-block rounded"
                                                           alt="priceTags"/><Link onClick={() => {
                                    setShowContainerCol(false)
                                }} to="/priceTags">ЦЕННИКИ ТЕЙБЛ-ТЕНТЫ</Link></div>
                                <div className='col-sm-3 text-center'><img src={endBoards} className="m-auto w-75 h-75 d-block rounded"
                                                           alt="ServingImg"/><Link onClick={() => {
                                    setShowContainerCol(false)
                                }} to="/EndBoards">ТОРЦЕВЫЕ ДОСКИ</Link></div>
                                <div className='col-sm-3 text-center'><img src={chair} className="m-auto w-75 h-75 d-block rounded"
                                                           alt="ServingImg"/><Link onClick={() => {
                                    setShowContainerCol(false)
                                }} to="/chair">ИНТЕРЬЕР И МЕБЕЛЬ</Link></div>
                                <div className='col-sm-3 text-center'><img src={platestags} className="m-auto w-75 h-75 d-block rounded"
                                                           alt="platestags"/><Link onClick={() => {
                                    setShowContainerCol(false)
                                }} to="/platestags">ТАБЛИЧКИ/БИРКИ</Link></div>
                                <div className='col-sm-3 text-center'><img src={tea} className="m-auto w-75 h-75 d-block rounded"
                                                           alt="tea"/><Link onClick={() => {
                                    setShowContainerCol(false)
                                }} to="/TeaStationsTrays">ЧАЙНЫЕ СТАНЦИИ</Link></div>





                            </Nav>


                        </Col>
                        :
                        <Col sm={12} className="mt-1 mt-sm-0">

                            <Nav className="Rounded  bg-white ">
                                {showBtn ?
                                    <></> : <Button onClick={() => {
                                        navigate(-1);
                                        setShowContainerCol(true)
                                    }}>Back</Button>
                                }
                                <Routes>


                                    <Route path="/Serving"
                                           element={<AddCardsElement setShowBtn={setShowBtn} basket={basket}
                                                                     setBasket={setBasket} elem={Serving}/>}/>
                                    <Route path="/ServingDishes"
                                           element={<AddCardsElement setShowBtn={setShowBtn} basket={basket}
                                                                     setBasket={setBasket} elem={ServingDishes}/>}/>
                                    <Route path="/TeaStationsTrays"
                                           element={<AddCardsElement setShowBtn={setShowBtn} basket={basket}
                                                                     setBasket={setBasket} elem={TeaStationsTrays}/>}/>
                                    <Route path="/EndBoards"
                                           element={<AddCardsElement setShowBtn={setShowBtn} basket={basket}
                                                                     setBasket={setBasket} elem={EndBoards}/>}/>
                                    <Route path="/:name" element={<CardElement setShowBtn={setShowBtn}/>}/>
                                </Routes>
                            </Nav>
                        </Col>}
                </Row>
            </Container>
        </>
    );
};
export default NavComponent