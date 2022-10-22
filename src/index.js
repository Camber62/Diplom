import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from "./components/Main";
import {BrowserRouter} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <Header/>
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
    </React.StrictMode>
);