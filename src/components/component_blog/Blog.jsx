import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from "react-bootstrap";
// import { AwesomeButton } from 'react-awesome-button';
import vlog1 from '../../icons/блог уход скругленные.jpg'

const BlogNavComponent = () => {

    const [classContainer, setClassContainer] = useState(false)
    const [showContainer, setShowContainer] = useState(false)
    const arrBlog = [
        {
            img: vlog1,
            name: 'Blog1',
            textContent: 'Blog1textContent',
            TextAnnouncement: 'Всего несколько рекомендаций,следуя которым Вы увеличите срок жизни изделий.',
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
        setShowContainer(true)
        setClassContainer(true)
        return (
            <div>
                <p>{int.name}</p>
                <Button onClick={() => {
                    setShowContainer(false);
                    setClassContainer(false)
                }}>Back
                </Button>
            </div>
        )
    }


    return (
        <>

            <Container className={classContainer ? 'overContainerAnimacia' : 'overContainer'}>
                <h4 id="blog">БЛОГ|кейсы,новости,полезные материалы</h4>

                {showContainer ? <CardBlog/> :
                    <Row className='h5'>
                        {arrBlog.map((int, element) => {
                            return (
                                <Col sm={12} className="p-0 px-md-5 my-3" key={element}>
                                    <div className=" border-0">
                                        <div className=" w-100 d-flex bg-white align-items-center">
                                            <img className='col-sm-7 col-md-6  vlog_img' alt="vlog1" src={int.img}/>
                                            <p className='col-sm-5 col-md-6 px-sm-3'>{int.TextAnnouncement}</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>

                }
            </Container>
            <div className={showContainer ? "none" : "text-center arrowOpaciti"}>
                <img alt="alt" src={classContainer ? "https://img.icons8.com/windows/56/000000/circled-chevron-up.png"
                    :
                    "https://img.icons8.com/windows/56/null/circled-chevron-down.png"} onClick={() => {
                    setClassContainer(!classContainer)
                }}/>
            </div>

        </>
    )
}


export default BlogNavComponent