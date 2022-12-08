import React from 'react';
import {Link,} from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Image} from "react-bootstrap";
import {AwesomeButton} from "react-awesome-button";


const AllCardsElement = (props) => {

    const setBasket = props.setBasket
    const basket = props.basket
    const setShowBtn = props.setShowBtn
    const setElementCard=props.setElementCard

    const addBasket = (e) => {
        let siInArray = false
        basket.forEach(el => {
            if (el.name === e.name)
                siInArray = true
        })
        if (!siInArray)
            setBasket(basket.concat([e]))

    }


    return (

        <Row className="bg-white m-0 justify-content-around Rounded" md={3} sm={1} xs={1}>
            {props.elem.map((int, element) => {
                return (
                    <Col className="m-1 bg_All_Cards border-bottom border-3" key={element}>
                        <Link onClick={() => {setElementCard(int);setShowBtn(true)}} to={`/${int.name}`}>
                            <Image src={int.src} alt="alt" width="100"/>
                        </Link>

                        <div key={element}>
                            <div className="h6"><Link onClick={() => {setElementCard(int);setShowBtn(true)}} to={`/${int.name}`}>{int.name}</Link></div>

                            <div className="textAnnouncement"><Link onClick={() => {setElementCard(int);setShowBtn(true)}} to={`/${int.name}`}>{int.TextAnnouncement}</Link></div>

                            <div>{int.price}</div>

                            <AwesomeButton
                                className="my-2 position_btn"
                                type="primary"
                                onPress={(e) => {
                                e.preventDefault();
                                addBasket(int);
                                    }}>
                                <h6>Добавить в заказ</h6>
                            </AwesomeButton>

                        </div>
                    </Col>
                )
            })}
        </Row>
    )
}
export default AllCardsElement