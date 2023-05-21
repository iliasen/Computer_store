import React from 'react';
import Slideshow from "../components/models/SlideShow";
import '../css/Main.css'
import {Image} from "react-bootstrap";


import compImg1 from "../img/Main/1.jpg"
import compImg2 from "../img/Main/2.jpg"
const Main = () => {
    return (
        <div className='bg-overlay'>
            <div className='mb-5'>
                <Slideshow className='m-5 '/>
            </div>

            <div className="section21">
                <h3>Предложения от нас</h3>
                <div className="comp d-flex justify-between">
                    <div className="comp1">
                        <div className="text-comp"></div>
                        <div className="text-comp">GLADIATOR</div>
                        <div className="text-comp">123</div>
                        <div className="text-comp">Игровой компьютер последнего поколения GLADIATOR, топовый процессор
                            intel i5 в связке с большим объёмом памяти и быстрым SSD накопителем, обеспечивают
                            беспрецедентную производительность на высоких настройках графики и достойный показатель FPS.
                        </div>
                        <div className="items-comp1">
                            <div className="catalog__structure-title">Видео-карта</div>
                            <div className="catalog__structure-name">PALIT GЕFORCE RTX 3060 12Гб</div>
                            <div className="catalog__structure-title">Процессор</div>
                            <div className="catalog__structure-name">Intel Core i5-12600KF 3700 МГц</div>
                            <div className="catalog__structure-title">Охлаждение</div>
                            <div className="catalog__structure-name">ID-COOLING SE-224-RGB</div>
                            <div className="catalog__structure-title">Оперативная память</div>
                            <div className="catalog__structure-name">16Гб DDR4 RGB 3000 МГц</div>
                            <div className="catalog__structure-title">Материнская плата</div>
                            <div className="catalog__structure-name">ASUS PRIME H610M-K D4</div>
                            <div className="catalog__structure-title">Жёсткий диск</div>
                            <div className="catalog__structure-name">1 Тб Toshiba</div>
                            <div className="catalog__structure-title">Диск SSD</div>
                            <div className="catalog__structure-name">1000 Гб Hewlett-Packard (HP) M.2</div>
                            <div className="catalog__structure-title">Блок питания</div>
                            <div className="catalog__structure-name">500W be quiet</div>
                            <div className="catalog__structure-title">Корпус</div>
                            <div className="catalog__structure-name">Zalman Z7 Neo Black</div>
                        </div>
                    </div>
                    <div className="comp1">
                        <div className="img-comp2"></div>
                        <div className="name-comp2">TERMINATOR</div>
                        <div className="price-comp2">1234</div>
                        <div className="text-comp">Крутой мощный игровой пк. Создан для любителей качественного,
                            гейминга на высоком разрешении экрана. Играйте на максимальных настройках графики с
                            запредельным FPS на компьютере TERMINATOR. с Nvidia GEFORCE RTX 4070 TI рулит!
                        </div>
                        <div className="items-comp2">
                            <div className="catalog__structure-title">Видео-карта</div>
                            <div className="catalog__structure-name">GIGABYTE GEFORCE RTX 4070 Ti 12Гб</div>
                            <div className="catalog__structure-title">Процессор</div>
                            <div className="catalog__structure-name">Intel Core i5-12600KF 3700 МГц</div>
                            <div className="catalog__structure-title">Охлаждение</div>
                            <div className="catalog__structure-name">ID-COOLING SE-224-RGB</div>
                            <div className="catalog__structure-title">Оперативная память</div>
                            <div className="catalog__structure-name">16Гб DDR4 RGB 3000 МГц</div>
                            <div className="catalog__structure-title">Материнская плата</div>
                            <div className="catalog__structure-name">Gigabyte B660 HD3 D4</div>
                            <div className="catalog__structure-title">Жёсткий диск</div>
                            <div className="catalog__structure-name">1 Тб Seagate</div>
                            <div className="catalog__structure-title">Диск SSD</div>
                            <div className="catalog__structure-name">1000 Гб Hewlett-Packard (HP) M.2</div>
                            <div className="catalog__structure-title">Блок питания</div>
                            <div className="catalog__structure-name">700W CoolerMaster</div>
                            <div className="catalog__structure-title">Корпус</div>
                            <div className="catalog__structure-name">1STPLAYER STEAM PUNK</div>
                        </div>
                    </div>
                    <div className="comp1">
                        <div className="img-comp3"></div>
                        <div className="name-comp3">ZEON</div>
                        <div className="price-comp3">1234</div>
                        <div className="text-comp">Если вы хотите купить мощный игровой ПК на базе GEFORCE RTX 4080 с
                            использованием передовых технологий ритрейсинга, то EDELWEISS ZEON, лучшее решение. Не
                            отказывайте себе в удовольствии играть на максимальных настройках графики. Покупайте играйте
                            и побеждайте.
                        </div>
                        <div className="items-comp3">
                            <div className="catalog__structure-title">Видео-карта</div>
                            <div className="catalog__structure-name">PALIT RTX 4080 GAMING PRO 16 Гб</div>
                            <div className="catalog__structure-title">Процессор</div>
                            <div className="catalog__structure-name">Intel Core i7-13700KF 3200 МГц</div>
                            <div className="catalog__structure-title">Охлаждение</div>
                            <div className="catalog__structure-name">ID-COOLING AURAFLOW X 360</div>
                            <div className="catalog__structure-title">Оперативная память</div>
                            <div className="catalog__structure-name">32Гб Kingston HyperX Fury RGB 3600</div>
                            <div className="catalog__structure-title">Материнская плата</div>
                            <div className="catalog__structure-name">Gigabyte Z690 Gaming X D4</div>
                            <div className="catalog__structure-title">Жёсткий диск</div>
                            <div className="catalog__structure-name">4 Тб Seagate</div>
                            <div className="catalog__structure-title">Диск SSD</div>
                            <div className="catalog__structure-name">960 Гб Kingston</div>
                            <div className="catalog__structure-title">Блок питания</div>
                            <div className="catalog__structure-name">850W Gigabyte P850GM</div>
                            <div className="catalog__structure-title">Корпус</div>
                            <div className="catalog__structure-name">Zalman X3 White</div>
                        </div>
                    </div>


                    <div className="comp1">
                        <div className="img-comp4"></div>
                        <div className="name-comp4">ASUS TUF</div>
                        <div className="price-comp4">123</div>
                        <div className="text-comp">ASUS TUF – игровая станция 2023 года. Мощнейший игровой ПК позволит
                            вам забыть о настройках графики даже в самых требовательных играх. Ставьте настройки на
                            ультра и нажимайте на заветную кнопку "Начать игру"
                        </div>
                        <div className="items-comp4">
                            <div className="catalog__structure-title">Видео-карта</div>
                            <div className="catalog__structure-name">PALIT GЕFORCE RTX 4090 24Гб</div>
                            <div className="catalog__structure-title">Процессор</div>
                            <div className="catalog__structure-name">Intel Core i9-13900KF 3200 МГц</div>
                            <div className="catalog__structure-title">Охлаждение</div>
                            <div className="catalog__structure-name">ID-COOLING AURAFLOW X 360</div>
                            <div className="catalog__structure-title">Оперативная память</div>
                            <div className="catalog__structure-name">32 Гб G.Skill Trident Z5 6000МГц</div>
                            <div className="catalog__structure-title">Материнская плата</div>
                            <div className="catalog__structure-name">ASUS PRIME Z690-A D5</div>
                            <div className="catalog__structure-title">Жёсткий диск</div>
                            <div className="catalog__structure-name">4 Тб Seagate x2</div>
                            <div className="catalog__structure-title">Диск SSD</div>
                            <div className="catalog__structure-name">1000 Гб SSD Samsung 980 Pro M.2</div>
                            <div className="catalog__structure-title">Блок питания</div>
                            <div className="catalog__structure-name">850W Gigabyte Aorus</div>
                            <div className="catalog__structure-title">Корпус</div>
                            <div className="catalog__structure-name">ASUS TUF Gaming GT501 Black</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="section2">
                <div className="workPC">
                    <div className="text-workPC">
                        <h4>ПК для игр и работы</h4>
                        <p>Игровые компьютеры в ценовом диапазоне от 100 тысяч рублей пользуются наибольшей популярностью у наших клиентов. Их технические характеристики позволяют воплощать в реальность самые смелые идеи. Как правило, системные блоки из продвинутой серии имеют в своем активе:</p>
                        <ul>
                            <li>мощный процессор – AMD Ryzen 7, Intel Core i7 или Intel Core i9</li>
                            <li>крутую графику Nvidia – GЕFORCE RTX 3070 или GЕFORCE RTX 3080</li>
                            <li>жесткий диск – от 2 до 8 Тб Seagate, WDC Black, Gold</li>
                            <li>быстрые SSD диски формата NVME M.2 Samsung, Gigabyte</li>
                        </ul>
                        <p>Представленные модели отличает боевой, даже агрессивный дизайн. Корпус и RGB подсветка плюс эффективная система вентиляции выполнены стильно, уникально, они ненавязчиво подчеркивают высокий статус крутого геймера, а как иначе это же современные Gaming PC.</p>
                    </div>
                    <div className="img-workPC"><Image src={compImg1}/></div>
                </div>
                <div className="gamePC">
                    <div className="img-gamePC"><Image src={compImg2}/></div>
                    <div className="text-gamePC">
                        <h4>Больше чем мощный игровой ПК</h4>
                        <p>По-настоящему крутой комп должен отвечать ряду требований, среди которых:</p>
                        <li>возможность запуска любого современного проекта класса AAA</li>
                        <li>комфортный FPS, в том числе в разрешении 4K (более 100 FPS в FHD и на уровне 60‑80 в 4K)</li>
                        <li>использование последних технологических решений (трассировки лучей реалтайм, высокое количество ядер CPU и GPU, RGB подсветка, DLSS рендеринг на базе ИИ, процедурная генерация игрового мира)</li>
                        <li>полное отсутствие микрофонов и посадки частоты кадров, мешающих плавному геймплею</li>
                    <p>Чтобы системник соответствовал выше перечисленным параметрам, он должен быть собран из лучших брендовых комплектующих. Соблюдая данное условия мы получим мощный игровой ПК с приставкой gaming который не только «потянет» любую современную игру, но и будет актуален в течение ближайших 3 – 4 лет.</p>

                    </div>
                </div>
            </div>


            <div className="dg-mytable">
                <div className="mytable">
                    <div className="mytableh2">
                        <h2>Наши преимущества</h2>
                    </div>
                    <table>
                        <tr>
                            <td>
                                <h3>Профессианальная сборка ПК</h3>
                                    <p>Качественная сборка компьютеров и индивидуальная настройка от инженеров компании
                                        PCHub. Персонификация системных блоков</p>
                            </td>
                            <td>
                                <h3>Фирменная гарантия</h3>
                                    <p>Качественная сборка компьютеров и индивидуальная настройка от инженеров компании
                                        PCHub. Персонификация системных блоков</p>
                            </td>
                            <td>
                                <h3>Техническая поддержка</h3>

                                    <p>Оперативно ответим на любые вопросы по настройке оборудования и программного
                                        обеспечения</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Доставка по всей Беларуси</h3>

                                    <p>Доставка по всей территории Беларуси. 100 % страховка груза на полную стоимость.
                                        Бесплатная доставка по Минску собственной логистической службой</p>
                            </td>
                            <td>
                                <h3>Официальный партнер</h3>

                                    <p>Компания PCHub является сертифицированным партнером INTEL, ASUS, MSI, NVIDIA по
                                        сборке готовых игровых решений на базе GEFORCE RTX</p>
                            </td>
                            <td>
                                <h3>Акции Скидки Подарки</h3>
                                    <p>На сайте регулярно проводятся акции, действует специальная система скидок и
                                        спецпредложений, разыгрываются ценные подарки</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Main;