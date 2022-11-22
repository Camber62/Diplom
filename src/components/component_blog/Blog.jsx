import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from "react-bootstrap";
import { AwesomeButton } from 'react-awesome-button';
import vlog1 from '../../icons/баннер уход скругленный.jpg'
const BlogNavComponent = () => {

    const [classContainer, setClassContainer] = useState(false)
    const [showContainer, setShowContainer] = useState(false)
    const arrBlog = [
        {
            img: vlog1,
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



    const CardBlog = (int) => {
        // console.log(int)
        setShowContainer(true)
        setClassContainer(true)
        return (
            <div>
                <p>{int.name}</p>
                <Button onClick={()=>{setShowContainer(false);setClassContainer(false)}}>Back
                </Button>
            </div>
        )
    }


    return (
        <>

            <Container className={classContainer ? 'overContainerAnimacia' : 'overContainer' }>
                <h4>БЛОГ|кейсы,новости,полезные материалы</h4>
                {showContainer ? <CardBlog/>:
                    <Row>
                        {arrBlog.map((int, element) => {
                            return (
                                <Col sm={12} md={6} className="my-5" key={element}>
                                    <div className="mb-3 border-0">
                                        <div className="row g-0">
                                            <div className="col-sm-4 Rounded">
                                                <img alt="qwe" src={int.img}/></div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{int.name}</h5>
                                                    <p className="card-text">{int.TextAnnouncement}</p>
                                                    <AwesomeButton className="mb-5" type="primary"  onPress={() => {
                                                        CardBlog(int)
                                                    }}>cklic</AwesomeButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>

                }
            </Container>
            <div className= {showContainer ? "none":"text-center arrowOpaciti"}>
                <img alt="alt" src= {classContainer ? "https://img.icons8.com/windows/56/000000/circled-chevron-up.png"
                :
                "https://img.icons8.com/windows/56/null/circled-chevron-down.png"} onClick={()=>{setClassContainer(!classContainer)}}/>
                </div>

        </>
    )
}


export default BlogNavComponent