import React from 'react';
import {Outlet} from "react-router-dom";
import '../compstyles/FindJobStyles.css'

import Carousel from "react-bootstrap/Carousel";
import A from "../BG/pr1.jpg";
import C from "../BG/pr3.jpg";
import D from '../BG/pr2.jpg';
const Findjob = () => {
    return (
        <div className='bd'>
            <div className="tx">
                МЕСТО ЧТОБЫ НАЙТИ
            </div>
            <div className="tx1">
                РАБОТУ
            </div>
            <div className="tx2">
                БУДУЩЕГО
            </div>
            <div>
                <Carousel className="CR">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 Imc"
                            src={A}
                            alt="First slide"
                            style={{borderRadius:15}}
                        />
                        <Carousel.Caption>
                            <h4 style={{color:"white"}}>найди работу мечты</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 Imc"
                            src={D}
                            alt="Second slide"
                            style={{borderRadius:15}}
                        />
                        <Carousel.Caption>
                            <h4 style={{color:"white"}}>здесь легко найти работу по душе</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 Imc"
                            src={C}
                            alt="Third slide"
                            style={{borderRadius:15}}
                        />
                        <Carousel.Caption>
                            <h4 style={{color:"white"}}>тысячи работников ждут вашего предложения</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Outlet/>
        </div>

    );
};

export default Findjob;