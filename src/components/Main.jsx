import React, {useState} from 'react';
import {Route, Routes, Link} from "react-router-dom";
import CardElement from "./components_nav/CardElement";
import EndBoard from "./components_nav/End_boards";
import Slider from "./components_nav/Slaider";
import logo from "../icons/img.JPEG"

const Main = () => {
    const [path, setPath] = useState('');
    const Servirovka = [
        {id: 0, name: "a", price: 123, about: "history", src: "../icons/lemur.jpg"},
        {id: 1, name: "b", price: 1132, about: "bcbb"},
        {id: 2, name: "c", price: 321, about: "scss"}
    ];
    const EndBoards = [
        {id: 0, name: "BOARD", price: 123, about: "board"},
        {id: 1, name: "qwerty", price: 1132, about: "Qwerty"},
        {id: 2, name: "Lasssy", price: 321, about: "Lasssy"},
    ]


    return (
        <>
            <container className="container">
                <aside className='container_nav'>
                    <div className="container_nav_catalog">
                        <p>Каталог</p>
                    </div>
                    <div className="container_nav_catalog_list">
                        <p><Link to="/">- Home</Link></p>
                        <p><Link to="/Table">- ТОРЦЕВЫЕ ДОСКИ</Link></p>
                        <p><Link to="/qwe">- ЧАЙНЫЕ СТАНЦИИ</Link></p>
                        <p><Link to="/Favorite">- МЕБЕЛЬ И ИНТЕРЬЕР</Link></p>
                        <p><Link to="/Favorite">- ПОДАЧА И СЕРВИРОВКА БЛЮД/НАПИТКОВ</Link></p>
                        <p><Link to="/Favorite">- САЛФЕТНИЦЫ</Link></p>
                        <p><Link to="/Favorite">- ПОДСТАВКИ ДЛЯ СПЕЦИЙ</Link></p>
                        <p><Link to="/Favorite">- ТАБЛИЧКИ «РЕЗЕРВ СТОЛА»</Link></p>
                        <p><Link to="/Favorite">- ДЛЯ ПРИБОРОВ</Link></p>
                    </div>
                </aside>

                <main><Routes>
                    <Route path="/" element={<Slider/>}/>
                    <Route path="/Table" element={<EndBoard setPath={setPath} elem={EndBoards}/>}/>
                    <Route path="/qwe" element={<EndBoard setPath={setPath} elem={Servirovka}/>}/>
                    <Route path={path} element={<CardElement/>}/>
                </Routes></main>
            </container>
        </>
    );
};
export default Main