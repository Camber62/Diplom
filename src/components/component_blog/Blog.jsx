import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from "react-bootstrap";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';import vlog1 from '../../icons/блог уход скругленные.jpg'

const BlogNavComponent = () => {

    const [showContainer, setShowContainer] = useState(false)
    const arrBlog = [
        {
            img: vlog1,
            name: 'Blog1',
            textContent: 'Blog1textContent',
            TextAnnouncement: 'Всего несколько рекомендаций,следуя которым Вы увеличите срок жизни изделий.',
        },
    ]


    const CardBlog = (int) => {
        setShowContainer(true)
        return (
            <div>
                <p>{int.name}</p>
                <Button onClick={() => {
                    setShowContainer(false);
                }}>Back
                </Button>
            </div>
        )
    }


    return (
        <>

            <Container className='overContainer p-0'>
                <h4 id="blog">БЛОГ|кейсы,новости,полезные материалы</h4>

                {showContainer ? <CardBlog/> :
                    <CarouselProvider
                        naturalSlideWidth={70}
                        naturalSlideHeight={45}
                        totalSlides={3}
                    >
                        {arrBlog.map((int, element) => {
                            return (
                        <Slider>
                            <Slide index={0} > <img className='Rounded w-100 h-100' alt="vlog1" src={int.img}/>.</Slide>
                            <Slide index={1}>I am the second Slide.</Slide>
                            <Slide index={2}>I am the third Slide.</Slide>
                        </Slider>)})}

                        <ButtonBack>Back</ButtonBack>
                        <ButtonNext>Next</ButtonNext>
                    </CarouselProvider>

                }
            </Container>


        </>
    )
}












export default BlogNavComponent