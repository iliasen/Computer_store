import {//usl для каждой страницы
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    BASKET_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    MAIN_ROUTE,
    CONFIG_ROUTE,
} from './consts/consts'

import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Main from './pages/Main'
import Auth from './pages/Auth'
import AboutUs from './pages/AboutUs'
import Configuration from './pages/Configuration' //сама страница



export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },

]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: ABOUT_ROUTE,
        Component: AboutUs,
    },
    {
        path: CONFIG_ROUTE,
        Component: Configuration,
    },
    {
        path: BASKET_ROUTE,
        Component: Basket,
    },
]
