import React, {useState} from "react";
import Container from 'react-bootstrap/Container';

// import {Button} from "react-bootstrap";
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import vlog1 from '../../icons/блог уход скругленные.jpg'
import vlog1_1 from '../../icons/icons_vlog/vlog1.png'

const BlogNavComponent = () => {

    const [showContainer, setShowContainer] = useState(false)
    const [cardBlog, vslueCardBlog] = useState(false)
    const arrBlog = [
        {
            img: vlog1,
            name: 'Vlog1',
            textContent: 'Посуда из натурального дерева нуждается в определенном уходе. Вы сильно продлите жизнь изделиям, выполняя несколько простых правил.\n' +
                'КАК МЫТЬ?\n' +
                'Посуду из дерева МОЖНО и НУЖНО мыть! Используйте щадящие средства, не используйте металлические губки. Ни в коем случае не мойте изделия в посудомоечной машине и не замачивайте в воде. Все нужно делать своевременно. Воспользовались, помыли, убрали лишнюю влагу полотенцем, оставили сушиться в хорошо проветриваемом месте. \n' +
                'ГДЕ ХРАНИТЬ?\n' +
                '\n' +
                'Дерево не любит резких перепадов температур, поэтому не стоит хранить посуду в холодильнике, рядом с источниками тепла. Место хранения должно быть хорошо проветриваемым, желательно открытым. Закрытый шкаф с влажной посудой точно не подойдет. \n' +
                'КАК УХАЖИВАТЬ?\n' +
                'Если появились шероховатости, потрите место куском наждачной бумаги с мелким зерном. Периодически (раз в 1-1,5 месяца) покрывайте поверхность тарелок и досок новым слоем масла. Мы рекомендуем профессиональное льняное масло. Оно защищает дерево от воздействия влаги, препятствует пересыханию и образованию трещин, пропитанное маслом дерево меньше впитывает запахи, легче и эффективнее очищается. После покрытия просушите, минимум сутки. Будет здорово, если покроете сверху тонким слоем карнаубского воска. \n',
            TextAnnouncement: 'Посуда из натурального дерева нуждается в определенном уходе. Вы сильно продлите жизнь изделиям, выполняя несколько простых правил.',
            imgVlog: vlog1_1
        },
        {
            img: vlog1,
            name: 'Vlog2',
            textContent: 'Blog1textContent',
            TextAnnouncement: 'Всего несколько рекомендаций,следуя которым Вы увеличите срок жизни изделий.',
        },
    ]


    const CardBlog = (props) => {
        const cardBlog = props.cardBlog
        setShowContainer(true)
        return (<>
                <button className='border-0 mr back'
                        onClick={() => {
                            setShowContainer(false);
                        }}><img alt='alt' src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                </button>
            <div className='vlog px-3 Rounded bg-white d-flex align-items-center flex-column'>

                <p className='text-center px-3'>{cardBlog.textContent}</p>
                <img className='imgVlog'  src={cardBlog.imgVlog} alt="imgVlog"/>
            </div>
            </>
        )
    }


    return (
        <>

            <Container className='overContainer p-0'>
                <h4 id="blog">БЛОГ|кейсы,новости,полезные материалы</h4>

                {showContainer ? <CardBlog cardBlog={cardBlog}/> :
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={60}
                        totalSlides={arrBlog.length}
                    >

                        <Slider>
                            {arrBlog.map((int, element) => {
                                return (
                                    <Slide className='text-center' key={element} index={element}>
                                        <img
                                        className='rounded-5 w-75 h-100'
                                        alt="vlog1"
                                        src={int.img}
                                        onClick={() => {
                                        vslueCardBlog(int);
                                        setShowContainer(true)
                                    }}/>

                                    </Slide>
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