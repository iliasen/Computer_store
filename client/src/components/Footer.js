import React from 'react';
import {Image} from "react-bootstrap";
import '../css/Footer.css'

import partner from '../img/Footer/Partner.png'
const Footer = () => {
    return (
        <div className="home-about">
            <div className="row">
                <div className="footer__partners">
                    <div className="my-text">
                        <p className="footer__title">Наши партнеры</p>
                        <p><Image src={partner} alt="Наши партнеры" /></p>
                    </div>
                </div>
                <div className="footer__adres">
                    <div className="my-text">
                        <p className="footer__title">Нас можно найти по адресу</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;