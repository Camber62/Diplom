import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Banner1 from "../../icons/Banner1.jpg"
import {AwesomeButton} from "react-awesome-button";

const News = [
    {id: 0, name: "КОЛЛЕКЦИЯ ЦЕННИКОДЕРЖАТЕЛЕЙ ИЗ НАТУРАЛЬНОГО ДУБА",


        about: "Ценникодержатели выполнены из массива дуба, тщательно отшлифованы, покрыты профессиональным льняным маслом. Благодаря правильному покрытию, держатели отталкивают влагу, в связи с этим, на них не будут оставаться пятна." +
            "Экологичные и стильные - изюминка Вашего бизнеса. Даже такая, казалось бы, мелочь может влиять на продажи, соответственно, и на прибыль. Невероятная текстура натурального дуба подчеркнёт и даже добавит ценность Вашему товару. " +
            "Зачастую при открытии магазина досконально разрабатывается интерьер, подключаются профессионалы по мерчандайзингу, но мало кто задумывается о таких деталях. А это на самом деле важно. Только представьте, какое у вас стильное пространство и крутой товар... и... скучные белые пластиковые ценники, которые портят всю картину." +
            "Держатели представлены в трёх размерах и подходят для любых ценников (картон, меловые):" +
            "40*30*20\n" +
            "70*30*20\n" +
            "100*30*20" +
            "Также, можем изготовить по Вашим размерам (перейдите в раздел «Индивидуальный заказ»). \n" +
            "Ждём Ваших заказов и желаем Вам отличных продаж!",



        img: Banner1},



    {id: 1, name: "Stocks1", about: "StocksStocksStocks1", img: "/"},
]


const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = (props) => {
    // const modalShow = props.modalShow
    const setModalShow = props.setModalShow
    // const modalBlog=props.modalBlog
    const setModalBlog = props.setModalBlog


    return (<>

            <AutoplaySlider className="AutoplaySlider "
                // play={true}
                            cancelOnInteraction={false} // should stop playing on user interaction
                            interval={3500}
            >
                {News.map((int, element) => {
                    return (

                        <div className="w-100 h-100" key={element}>
                            <img key={element} className="w-100 h-100" alt="qwe" src={int.img}/>
                            <AwesomeButton type="primary" onPress={(e) => {
                                e.preventDefault();
                                setModalBlog(int)
                                setModalShow(true)
                            }}><h6>Подробнее</h6></AwesomeButton>
                        </div>

                    );
                })}
            </AutoplaySlider>
        </>
    );
}
export default Slider;