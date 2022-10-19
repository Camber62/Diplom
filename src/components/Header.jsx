import React from 'react';
import logo from "../icons/img.JPEG";

const Header = () => {

    return (
        <header>
            <nav className="header">
                <div className="header_logo">
                    <img className="logoImg" src={logo} alt=""/>
                </div>
                <div className="header_link">
                    <a href="#О НАС">О НАС</a>
                    <a href="#КАТАЛОГ">КАТАЛОГ</a>
                    <a href="#ДОСТАВКА И ОПЛАТА ">ДОСТАВКА И ОПЛАТА</a>
                    <a href="#КОНТАКТЫ">КОНТАКТЫ</a>
                    <a href="#БЛОГ ">БЛОГ </a>
                </div>
            </nav>
        </header>
    )
}
export default Header