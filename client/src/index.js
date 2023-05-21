import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import BasketStore from "./store/BasketStore";
import ItemStore from "./store/ItemStore";
export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Context.Provider
        value={{
            user: new UserStore(),
            item: new ItemStore(),
            basket: new BasketStore(),

        }}
    >
        <App />
    </Context.Provider>
)