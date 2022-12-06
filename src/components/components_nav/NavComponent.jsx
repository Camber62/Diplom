import {Route, Routes, Link, useNavigate} from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'simplebar/dist/simplebar.min.css';
import React, {useState} from 'react';
import Slider from "./Slaider";
import CardElement from "./CardElement";
import AllCardsElement from "./AllCardsElement";
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
    const PriceTags = props.PriceTags
    const Furniture = props.Furniture
    const SignsTags = props.SignsTags




    const [showContainerCol, setShowContainerCol] = useState(true)
    const [showBtn, setShowBtn] = useState(false)
    const navigate = useNavigate()
    const [modalShow, setModalShow] = useState(false)
    const [modalBlog, setModalBlog] = useState(false)
    const [elementCard, setElementCard] = useState('')

    return (
        <>
            {modalShow ?
                <div className="modalWindow">
                    <div className="w-50 bg-light m-5">
                        <button className="border-0  float-end" onClick={() => setModalShow(false)}>X</button>
                        <p>{modalBlog.name}</p>
                        <p>{modalBlog.about}</p></div>
                </div> :
                <></>}

            <Container fluid="md">
                <Row className="pt-3">
                    <Col lg={5} className="p-0">
                        <div className="mb-1">
                            <div className="text-center Rounded text-white container_nav_catalog"><h4
                                id="catalog">Каталог</h4></div>
                            <div className="text-center px-3 mt-3 pb-5 mt-sm-1 bg-white Rounded text_color pl-5">
                                {/*<Link href="#katalog" title="Basic demo" />*/}
                                {/* eslint-disable-next-line no-restricted-globals */}
                                <Link onClick={() => {scrollTo(0, 450);setShowContainerCol(false)}} to="/ServingDishes"><b>-ПОДАЧА БЛЮД</b><br/></Link>
                                {/* eslint-disable-next-line no-restricted-globals */}
                                <Link onClick={() => {scrollTo(0, 450);setShowContainerCol(false)}} to="/Serving"><b>-СЕРВИРОВКА</b><br/></Link>
                                {/* eslint-disable-next-line no-restricted-globals */}
                                <Link onClick={() => {scrollTo(0, 450);setShowContainerCol(false)}} to="/priceTags"><b>-ИНТЕРЬЕР МЕБЕЛЬ</b><br/></Link>
                                {/* eslint-disable-next-line no-restricted-globals */}
                                <Link onClick={() => {scrollTo(0, 450);setShowContainerCol(false)}} to="/EndBoards"><b>-ТОРЦЕВЫЕ ДОСКИ</b><br/></Link>
                                {/* eslint-disable-next-line no-restricted-globals */}
                                <Link onClick={() => {scrollTo(0, 450);setShowContainerCol(false)}} to="/chair"><b>-БИРКИ/РЕЗЕРВ</b><br/></Link>
                                {/* eslint-disable-next-line no-restricted-globals */}
                                <Link onClick={() => {scrollTo(0, 450);setShowContainerCol(false)}} to="/platestags"><b>-ЧАЙНЫЕ СТАНЦИИ</b><br/></Link>
                                {/* eslint-disable-next-line no-restricted-globals */}
                                <Link onClick={() => {scrollTo(0, 450);setShowContainerCol(false)}} to="/TeaStationsTrays"><b>-ПОДНОСЫ</b></Link>
                            </div>
                            <div className="mt-3 text-left text_color">
                                <h5>МАСТЕРСКАЯ ИЗДЕЛИЙ ИЗ
                                НАТУРАЛЬНОГО ДЕРЕВА
                                ДЛЯ ВАШЕГО
                                БИЗНЕСА</h5>
                            </div>
                        </div>

                    </Col>
                    <Col lg={7} className=" pt-xs-3">
                        <Slider modalShow={modalShow} setModalShow={setModalShow} modalBlog={modalBlog}
                                setModalBlog={setModalBlog}/>
                    </Col>
                </Row>
                <h4 id='katalog' className="pt-5 text-center fw-bold">В КАТАЛОГЕ ПРЕДСТАВЛЕННЫ ГОТОВЫЕ ФОРМЫ ИЗДЕЛИЙ ИЗ ДЕРЕВА. </h4>

                <Row className=" m-0 mt-5">

                    {showContainerCol ?
                        <Col sm={12}>
                            <Nav id="Catalog" className="p-3 h-auto Rounded justify-content-around">
                                <div className=' col-9 col-sm-5 col-md-3 px-3 text-center'>
                                    <Link onClick={() => {
                                        setShowContainerCol(false)
                                    }} to="/ServingDishes">
                                        <img src={servingDishes}
                                             className="justify-content-center w-100 h-75 d-block rounded"
                                             alt="ServingDishesImg"/>
                                        <b className='pb-1'>ПОДАЧА БЛЮД</b>
                                    </Link>
                                </div>

                                <div className='col-9 col-sm-5 col-md-3 px-3 text-center'>
                                    <Link onClick={() => {
                                        setShowContainerCol(false)
                                    }} to="/Serving">
                                        <img src={ServingImg}
                                             className="justify-content-center w-100 h-75 d-block rounded"
                                             alt="ServingImg"/>
                                        <b>СЕРВИРОВКА СТОЛА</b>
                                    </Link>
                                </div>

                                <div className='col-9 col-sm-5 col-md-3 px-3 text-center'>
                                    <Link onClick={() => {
                                        setShowContainerCol(false)
                                    }} to="/priceTags">
                                        <img src={priceTags}
                                             className="justify-content-center w-100 h-75 d-block rounded"
                                             alt="priceTagsImg"/>
                                        <b>ЦЕННИКИ ТЕЙБЛ-ТЕНТЫ</b>
                                    </Link>
                                </div>

                                <div className='col-9 col-sm-5 col-md-3 px-3 text-center'>
                                    <Link
                                        onClick={() => {
                                            setShowContainerCol(false)
                                        }} to="/EndBoards">
                                        <img src={endBoards}
                                             className="justify-content-center w-100 h-75 d-block rounded"
                                             alt="EndBoardsImg"/>
                                        <b>ТОРЦЕВЫЕ ДОСКИ</b>
                                    </Link>
                                </div>

                                <div className='col-9 col-sm-5 col-md-3 px-3 text-center'>
                                    <Link onClick={() => {
                                        setShowContainerCol(false)
                                    }} to="/chair">
                                        <img src={chair} className="justify-content-center w-100 h-75 d-block rounded"
                                             alt="chairImg"/>
                                        <b>ИНТЕРЬЕР И МЕБЕЛЬ</b>
                                    </Link>
                                </div>

                                <div className='col-9 col-sm-5 col-md-3 px-3 text-center'>
                                    <Link onClick={() => {
                                        setShowContainerCol(false)
                                    }} to="/platestags">
                                        <img src={platestags}
                                             className="justify-content-center w-100 h-75 d-block rounded"
                                             alt="platestagsImg"/>
                                        <b>ТАБЛИЧКИ/БИРКИ</b>
                                    </Link>
                                </div>

                                <div className='col-9 col-sm-5 col-md-3 px-3 text-center'>
                                    <Link onClick={() => {
                                        setShowContainerCol(false)
                                    }} to="/TeaStationsTrays">
                                        <img src={tea} className="justify-content-center w-100 h-75 d-block rounded"
                                             alt="TeaStationsTraysImg"/>
                                        <b>ЧАЙНЫЕ СТАНЦИИ</b>
                                    </Link>
                                </div>
                            </Nav>


                        </Col>
                        :
                        <Col sm={12} className="mt-1 mt-sm-0">

                            <Nav className="Rounded  ">
                                {showBtn ?
                                    <></> : <button className="back border-0" onClick={() => {
                                        navigate(-1);
                                        setShowContainerCol(true)
                                    }}><img alt='alt' src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                                    </button>
                                }
                                <Routes>


                                    <Route path="/chair"
                                           element={<AllCardsElement setElementCard={setElementCard} setShowBtn={setShowBtn} basket={basket}
                                                                     setBasket={setBasket} elem={Furniture}/>}/>
                                    <Route path="/platestags"
                                           element={<AllCardsElement setElementCard={setElementCard} setShowBtn={setShowBtn} basket={basket}
                                                                     setBasket={setBasket} elem={SignsTags}/>}/>
                                    <Route path="/priceTags"
                                           element={<AllCardsElement setElementCard={setElementCard} setShowBtn={setShowBtn} basket={basket}
                                                                     setBasket={setBasket} elem={PriceTags}/>}/>

                                    <Route path="/Serving"
                                           element={<AllCardsElement setElementCard={setElementCard} setShowBtn={setShowBtn} basket={basket}
                                                                     setBasket={setBasket} elem={Serving}/>}/>
                                    <Route path="/ServingDishes"
                                           element={<AllCardsElement setElementCard={setElementCard} setShowBtn={setShowBtn} basket={basket}
                                                                     setBasket={setBasket} elem={ServingDishes}/>}/>
                                    <Route path="/TeaStationsTrays"
                                           element={<AllCardsElement setElementCard={setElementCard} setShowBtn={setShowBtn} basket={basket}
                                                                     setBasket={setBasket} elem={TeaStationsTrays}/>}/>
                                    <Route path="/EndBoards"
                                           element={<AllCardsElement setElementCard={setElementCard} setShowBtn={setShowBtn} basket={basket}
                                                                     setBasket={setBasket} elem={EndBoards}/>}/>
                                    <Route path="/:name" element={<CardElement elementCard={elementCard} setShowBtn={setShowBtn}  />}/>
                                </Routes>
                            </Nav>
                        </Col>
                    }
                </Row>
            </Container>
        </>
    );
};
export default NavComponent