import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/css/style.css';
import Header from './components/Header';
import Main from "./components/Main";
import Servirovka from './components/elemets'
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <BrowserRouter>
            <Main Servirovka={Servirovka}/>
        </BrowserRouter>
    </React.StrictMode>
);