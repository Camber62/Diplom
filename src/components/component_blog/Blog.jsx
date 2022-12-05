import React, {useState} from "react";
import Container from 'react-bootstrap/Container';

import {Button} from "react-bootstrap";
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import vlog1 from '../../icons/блог уход скругленные.jpg'

const BlogNavComponent = () => {

    const [showContainer, setShowContainer] = useState(false)
    const arrBlog = [
        {
            img: vlog1,
            name: 'Blog1',
            textContent: 'Blog1textContent',
            TextAnnouncement: 'Всего несколько рекомендаций,следуя которым Вы увеличите срок жизни изделий.',
        }, {
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
                        naturalSlideWidth={60}
                        naturalSlideHeight={45}
                        totalSlides={arrBlog.length}
                    >

                        <Slider>
                            {arrBlog.map((int, element) => {
                                return (
                                    <Slide index={element}> <img className='Rounded w-100 h-100' alt="vlog1"
                                                                 src={int.img} onClick={() => {
                                        console.log(element)
                                    }}/>.</Slide>
                                )
                            })}
                        </Slider>

                        <div className='d-flex justify-content-center position-relative'>
                            <ButtonBack className=' Rounded border-0'><img alt='left'
                                                                        src="https://img.icons8.com/windows/64/null/long-arrow-left.png"/></ButtonBack>
                            <ButtonNext className=' Rounded border-0'><img alt='right'
                                                                       src="https://img.icons8.com/windows/64/null/long-arrow-right.png"/></ButtonNext>
                        </div>
                    </CarouselProvider>

                }
            </Container>


        </>
    )
}


export default BlogNavComponent