import React from 'react';
import {Link} from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Image} from "react-bootstrap";
import {Button} from "react-bootstrap";


const AddCardsElement = (props) => {
    let setBasket = props.setBasket
    let basket = props.basket
    const addBasket = (e) => {
        setBasket(basket.concat([e
            // {
            //     TextAnnouncement: e.TextAnnouncement,
            //     about: e.about,
            //     id:e.id,
            //     name:e.name ,
            //     price:e.price ,
            //     series: e.series,
            //     src: e.src
            // }
        ]))

        console.log(basket)
    }


    return (

        <Row className=" m-0 justify-content-around" md={3} sm={1} xs={1}>
            {props.elem.map((int, element) => {
                return (

                        <Col className="m-1 bg_All_Cards">
                            <p className="img_All_Cards"><Link to={`/${int.name}`}><Image src={int.src} alt="alt"
                                                                                          width="100"/></Link></p>
                            <p key={element}>
                                <p className="h6"><Link to={`/${int.name}`}>{int.name}</Link></p>
                                <p className="textAnnouncement"><Link to={`/${int.name}`}>{int.TextAnnouncement}</Link>
                                </p>
                                <p>{int.price}</p>
                                <Button onClick={() => {
                                    addBasket(int)
                                }}>Добавить в заказ</Button>
                            </p>
                        </Col>
                )
            })}

        </Row>

    )
}
export default AddCardsElement

