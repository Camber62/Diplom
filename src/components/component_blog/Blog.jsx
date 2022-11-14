import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link, useNavigate, useParams} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import {Button, Image} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";


const BlogNavComponent = () => {

    // const [targ,setTarg]=useState(false)
    const arrBlog = [
        {
            img: '1',
            name: 'Blog1',
            textContent: 'Blog1textContent',
            TextAnnouncement: 'Blog1TextAnnouncement',
        },
        {
            img: '2',
            name: 'Blog2',
            textContent: 'Blog2textContent',
            TextAnnouncement: 'Blog2TextAnnouncement',
        },
        {
            img: '3',
            name: 'Blog3',
            textContent: 'Blog3textContent',
            TextAnnouncement: 'Blog3TextAnnouncement',
        },
        {
            img: '4',
            name: 'Blog4',
            textContent: 'Blog4extContent',
            TextAnnouncement: 'Blog4TextAnnouncement',
        },
        {
            img: '5',
            name: 'Blog5',
            textContent: 'Blog5textContent',
            TextAnnouncement: 'Blog5TextAnnouncement',
        },
    ]

    const CardBlog = () => {
        // setTarg(true)
        const navigate = useNavigate()
        const {name} = useParams();
        return (


            <div>
                <p>{name}</p>
                <Button onClick={() =>{navigate(-1)}}>Back</Button>

            </div>

        )
    }


    return (
        <>

            <Container>
                <Col>
                    <Nav>
                        {arrBlog.map((int, element) => {
                            return (
                                // targ ? <></>:
                                <Col>
                                    <Link to="blog/test">{int.name}</Link>
                                </Col>

                            )

                        })}

                    </Nav>
                </Col>
                <Col>
                    <Routes>
                        <Route path="/blog" element={<CardBlog/>}/>
                    </Routes>
                </Col>

            </Container>


        </>
    )
}


export default BlogNavComponent