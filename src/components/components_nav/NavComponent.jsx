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
            <Container fluid="md">
                <Row className="pt-3">
                    <Col sm={4} className="p-0">
                        <div className="mb-1">
                            <div className="text-center Rounded text-white container_nav_catalog"><h4
                                id="catalog">Каталог</h4></div>
                            <div className=" mt-3 pb-5 mt-sm-1 bg-white Rounded text_color pl-5">
                                <p>-ПОДАЧА БЛЮД</p>
                                <p>-СЕРВИРОВКА</p>
                                <p>-ИНТЕРЬЕР МЕБЕЛЬ</p>
                                <p>-ТОРЦЕВЫЕ ДОСКИ</p>
                                <p>-БИРКИ/РЕЗЕРВ</p>
                                <p>-ЧАЙНЫЕ СТАНЦИИ</p>
                                <p>-ПОДНОСЫ</p>
                            </div>
                            <div className="mt-3 text-left text_color"><h5>МАСТЕРСКАЯ ИЗДЕЛИЙ ИЗ НАТУРАЛЬНОГО ДЕРЕВА
                                ДЛЯ ВАШЕГО
                                БИЗНЕСА</h5></div>
                        </div>

                    </Col>
                    <Col sm={8} className=" pt-xs-3">
                        <Slider/>
                    </Col>
                </Row>

                <Row className=" m-0 mt-5">

                    {showContainerCol ?
                        <Col sm={12}>
                            <p>В КАТАЛОГЕ ПРЕДСТАВЛЕННЫ ГОТОВЫЕ ФОРМЫ ИЗДЕЛИЙ ИЗ ДЕРЕВА.ЕСЛИ ЗДЕСЬ НЕТ ТОГО,ЧТО ВАМ
                                НУЖНО,ПЕРЕЙДИТЕ В РАЗДЕЛ ИДИВИДУАЛЬНЫЙ ЗАКАЗ</p>
                            <Nav className="p-3 h-auto Rounded justify-content-around">
                                <div className=' col-9 col-sm-5 col-md-3 px-3 text-center'>
                                    <Link onClick={() => {setShowContainerCol(false)}} to="/ServingDishes">
                                    <img src={servingDishes} className="justify-content-center w-100 h-75 d-block rounded" alt="ServingDishesImg"/>
                                        <p>ПОДАЧА БЛЮД</p>
                                    </Link>
                                </div>

                                <div className='col-9 col-sm-5 col-md-3 px-3 text-center'>
                                    <Link onClick={() => {setShowContainerCol(false)}} to="/Serving">
                                    <img src={ServingImg} className="justify-content-center w-100 h-75 d-block rounded" alt="ServingImg"/>
                                        <p>СЕРВИРОВКА СТОЛА</p>
                                    </Link>
                                </div>

                                <div className='col-9 col-sm-5 col-md-3 px-3 text-center'>
                                    <Link onClick={() => {setShowContainerCol(false)}} to="/priceTags">
                                    <img src={priceTags} className="justify-content-center w-100 h-75 d-block rounded" alt="priceTagsImg"/>
                                        <p>ЦЕННИКИ ТЕЙБЛ-ТЕНТЫ</p>
                                    </Link>
                                </div>

                                <div className='col-9 col-sm-5 col-md-3 px-3 text-center'>
                                    <Link
                                    onClick={() => {setShowContainerCol(false)}} to="/EndBoards">
                                    <img src={endBoards} className="justify-content-center w-100 h-75 d-block rounded" alt="EndBoardsImg"/>
                                    <p>ТОРЦЕВЫЕ ДОСКИ</p>
                                </Link>
                                </div>

                                <div className='col-9 col-sm-5 col-md-3 px-3 text-center'>
                                    <Link onClick={() => {setShowContainerCol(false)}} to="/chair">
                                    <img src={chair} className="justify-content-center w-100 h-75 d-block rounded" alt="chairImg"/>
                                        <p>ИНТЕРЬЕР И МЕБЕЛЬ</p>
                                    </Link>
                                </div>

                                <div className='col-9 col-sm-5 col-md-3 px-3 text-center'>
                                    <Link onClick={() => {setShowContainerCol(false)}} to="/platestags">
                                    <img src={platestags} className="justify-content-center w-100 h-75 d-block rounded" alt="platestagsImg"/>
                                        <p>ТАБЛИЧКИ/БИРКИ</p>
                                    </Link>
                                </div>

                                <div className='col-9 col-sm-5 col-md-3 px-3 text-center'>
                                    <Link onClick={() => {setShowContainerCol(false)}} to="/TeaStationsTrays">
                                    <img src={tea} className="justify-content-center w-100 h-75 d-block rounded" alt="TeaStationsTraysImg"/>
                                        <p>ЧАЙНЫЕ СТАНЦИИ</p>
                                    </Link>
                                </div>
                                <div className='col-9 col-sm-5 col-md-3 px-3 text-center'>
                                    <Link onClick={() => {setShowContainerCol(false)}} to="/?">
                                        <img src={"?"} className="justify-content-center w-100 h-75 d-block rounded" alt="?"/>
                                        <p>?</p>
                                    </Link>
                                </div>


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


                                    {/*<Route path="/chair"*/}
                                    {/*       element={<AddCardsElement setShowBtn={setShowBtn} basket={basket}*/}
                                    {/*                                 setBasket={setBasket} elem={chair}/>}/>*/}
                                    {/*<Route path="/platestags"*/}
                                    {/*       element={<AddCardsElement setShowBtn={setShowBtn} basket={basket}*/}
                                    {/*                                 setBasket={setBasket} elem={platestags}/>}/>*/}
                                    {/*<Route path="/priceTags"*/}
                                    {/*       element={<AddCardsElement setShowBtn={setShowBtn} basket={basket}*/}
                                    {/*                                 setBasket={setBasket} elem={priceTags}/>}/>*/}

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