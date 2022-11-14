import React from 'react';
import {Link,} from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Image} from "react-bootstrap";
import {Button} from "react-bootstrap";


const AddCardsElement = (props) => {

    const setBasket = props.setBasket
    const basket = props.basket

    const addBasket = (e) => {
        let siInArray = false
        basket.forEach(el => {
            if (el.id === e.id)
                siInArray = true
        })
        if (!siInArray)
            setBasket(basket.concat([e]))
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
                            <p className="textAnnouncement"><Link
                                to={`/${int.name}`}>{int.TextAnnouncement}</Link>
                            </p>
                            <p>{int.price}</p>
                            <Button onClick={(e) => {
                                e.preventDefault()

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

