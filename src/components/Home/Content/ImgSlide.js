import React from "react";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './ImgSlide.scss';

const ImgSlide = () => {
    return (
        <div className="Slide">
            <Carousel autoplay>
                <div>
                    <div className="imgContent">
                        <img className="img" src="/images/Slide/slide-1.jpeg" />
                    </div>
                </div>
                <div>
                    <div className="imgContent">
                        <img className="img" src="/images/Slide/slide-2.jpeg" />
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default ImgSlide;