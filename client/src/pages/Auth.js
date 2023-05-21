import React, {useContext, useState} from 'react';
import {Form} from "react-bootstrap";
import {Context} from "../index";
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../consts/consts";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import '../css/Auth.css'
import {login, registration} from "../http/userAPI";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const { user } = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let nav = useNavigate()

    const click = async (event) => {   event.preventDefault()
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setAuth(true)
            console.log(user)
            console.log('Registration')
            nav(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }


    return (
        <div className='main-container'>
            <div className="card-content">
                <a aria-label="Гефест" href="/" className="Logo"></a>
                <h2 className="title">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="main-form">
                    <Form.Control
                        placeholder="Введите email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control
                        type="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {isLogin ? (
                        <button id="enter" onClick={click}>
                            Войти
                        </button>
                    ) : (
                        <button id="registration" onClick={click}>
                            <NavLink to={LOGIN_ROUTE}>Зарегистрироваться</NavLink>
                        </button>
                    )}
                    {isLogin ? (
                        <button id="registration">
                            <NavLink to={REGISTRATION_ROUTE}>Создать аккаунт</NavLink>
                        </button>
                    ) : (
                        <div></div>
                    )}

                </Form>
            </div>
        </div>
    );
};

export default Auth;