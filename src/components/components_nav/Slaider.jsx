import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Banner1 from "../../icons/Banner1.jpg"
const News = [
    {id: 0, name: "Stocks", about: "StocksStocksStocks", img:Banner1},
    {id: 1, name: "Stocks1", about: "StocksStocksStocks1", img: "/"},
    {id: 2, name: "Stocks2", about: "StocksStocksStocks2", img: "/"},
]

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {

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
                            {/*<h3>{int.name}</h3>*/}
                            {/*<p>{int.about}</p>*/}
                         </div>

                    );
                })}
            </AutoplaySlider>
        </>
    );
}
export default Slider;