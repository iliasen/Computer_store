import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {fetchAllItems, fetchBrands, fetchTypes} from "../http/itemAPI";
import {Dropdown} from "react-bootstrap";

import {observer} from "mobx-react-lite";


const Configuration = observer(() => {
    const {item} = useContext(Context)

    // useEffect(()=> {
    //     fetchTypes().then((type) => item.setTypes(type))
    //     fetchBrands(item.selectedType).then((brand)=>item.setBrands(brand))
    //     fetchAllItems(item.selectedType,item.selectedBrand).then((items) => item.setItems(items))
    // },[])
    return (
        <div>
            <section className="hero d-flex flex-column justify-content-center align-items-center" id="home">
                <div className="bg-overlay">
                    <div className="container">
                        <div className="col-lg-5 col-md-1 mx-auto col-5">
                            <div className="mt-5 text-center">
                                <h1 ata-aos="fade-up" data-aos-delay="500" className="text-white">
                                    <h1 className="title-page__h1">Конфигуратор ПК</h1>
                                    <div className="my-text1">
                                        <p className="title-page__text">Позволяет собрать компьютер, о котором вы
                                            мечтали. Изменить
                                            комплектацию представленных на сайте сборок, узнать цену онлайн, сравнить
                                            характеристики. Оформить заказ и получить готовый ПК с абсолютно бесплатной
                                            профессиональной сборкой. Продвинутый онлайн-сервис для модификации ПК</p>
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle variant='outline-dark'>{item.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {item.types.map(type =>
                        <Dropdown.Item
                            onClick={() =>item.setSelectedType(type)}
                            key={type.id}
                        >
                            {type.name}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>

            {item.selectedType && <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle variant='outline-dark'>{item.selectedBrand.name || "Выберите брэнд"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {item.types.map(brand =>
                        <Dropdown.Item
                            onClick={() =>item.setSelectedBrand(brand)}
                            key={brand.id}
                        >
                            {brand.name}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>}

            {item.selectedBrand && <div>
                {item.items.map(item => <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                           value="option1" checked/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            {item.name}
                        </label>
                </div>)}
            </div>}



        </div>
    );
});

export default Configuration;