import React, {useContext} from 'react';
import {ABOUT_ROUTE, BASKET_ROUTE, CONFIG_ROUTE, LOGIN_ROUTE, MAIN_ROUTE} from "../consts/consts";
import { NavLink } from 'react-router-dom'
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

import '../css/NavBar.css'


const NavBar = observer(() => {
    const {user} = useContext(Context)

    // user.setAuth(true)
    console.log(user.Auth)
    return (
    <div className='navbar'>
        <Container className='d-flex'>
            <div className='navPublicRoutes'>
                <NavLink to={MAIN_ROUTE} className="navbar-brand">PCHub</NavLink>

                <NavLink to={MAIN_ROUTE} className="nav-link">Домой</NavLink>


                <NavLink to={ABOUT_ROUTE} className="nav-link">О нас</NavLink>



                <NavLink to={CONFIG_ROUTE} className="nav-link">Услуги</NavLink>
            </div>


            <div>
                {user.Auth ?
                            <NavLink to={BASKET_ROUTE} className="nav-link">Корзина</NavLink>
                        : <NavLink className="nav-link" to={LOGIN_ROUTE}>
                        Авторизация
                    </NavLink>}

            </div>

        </Container>
    </div>
    );
});

export default NavBar;