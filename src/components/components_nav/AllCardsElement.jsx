import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Image} from "react-bootstrap";

// import {useHistory} from "react-router-dom";
// import image from '../../icons/lemur.jpg'


const EndBoard = (props) => {
    return (
        <Row>
            {props.elem.map((int, element) => {
                return (
                        <Col className="pt-3" sm={4}>
                            <p><Link to={`/${int.name}`}><Image src={int.src} alt="alt" width="100"/></Link></p>
                            <p  key={element}>
                                <p className="h6"><Link to={`/${int.name}`}>{int.name}</Link></p>

                                <p className="textAnnouncement"><Link to={`/${int.name}`}>{int.TextAnnouncement}</Link></p>
                                <p>{int.price}</p>
                            </p>
                        </Col>
                    )
            })}

        </Row>
    )
}
export default EndBoard

