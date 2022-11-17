import React from 'react';
import {Link,} from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Image} from "react-bootstrap";
import {AwesomeButton} from "react-awesome-button";


const AddCardsElement = (props) => {

    const setBasket = props.setBasket
    const basket = props.basket
    const setShowBtn= props.setShowBtn

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
                    <Col className="m-1 bg_All_Cards" key={element}>
                        <p className="img_All_Cards"><Link onClick={()=>{setShowBtn(true)}} to={`/${int.name}`}><Image src={int.src} alt="alt"
                                                                                      width="100"/></Link></p>
                        <p key={element}>
                            <p className="h6"><Link onClick={()=>{setShowBtn(true)}} to={`/${int.name}`}>{int.name}</Link></p>
                            <p className="textAnnouncement"><Link onClick={()=>{setShowBtn(true)}}
                                to={`/${int.name}`}>{int.TextAnnouncement}</Link>
                            </p>
                            <p>{int.price}</p>
                            <AwesomeButton type="primary" onPress={(e) => {
                                e.preventDefault();
                                addBasket(int);

                            }}><h6>Добавить в заказ</h6></AwesomeButton>
                        </p>
                    </Col>
                )
            })}
        </Row>
    )
}
export default AddCardsElement

