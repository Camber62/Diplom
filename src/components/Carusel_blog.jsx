import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Picture7 from "../icons/Picture7.png"
import Picture1_1 from "../icons/Picture1_1.png"
import Picture1_2 from "../icons/Pictur1_2.png"
import Container from "react-bootstrap/Container";
import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const blog = [
    {name: "blog1", TextAnnouncement: "anonce", data: "12.12.2022", img: Picture7},
    {name: "blog2", TextAnnouncement: "anonce2", data: "6.4.2022", img: Picture1_1},
    {name: "blog3", TextAnnouncement: "anonce3", data: "43.23.2342", img: Picture1_2},
]


const Slideshow = () => {
    return (
        <Container className="pl-0 pr-0 pt-5 pb-5">
            <h4 id='blog'>blog</h4>
            <div className="slide-container">

                <Slide>
                    {blog.map((slideImage, index) => (

                        <Row className="each-slide" key={index}>
                            <Col sm={4}><img className="w-100" src={slideImage.img} alt="ssdf"/></Col>
                            <Col sm={8}><span>{slideImage.TextAnnouncement}</span></Col>
                        </Row>

                    ))}
                </Slide>


            </div>
        </Container>
    )
}



export default Slideshow;