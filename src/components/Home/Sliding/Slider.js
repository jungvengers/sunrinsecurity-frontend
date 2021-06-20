import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from 'styled-components';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "../../../styles/Img_slider.css";

import Slide1 from '../../../assets/Slide/1.png'
import Slide2 from '../../../assets/Slide/2.png'
import Slide3 from '../../../assets/Slide/3.png'
import Slide4 from '../../../assets/Slide/4.png'
import Slide5 from '../../../assets/Slide/5.png'

import SwiperCore, {
    Autoplay, Pagination
} from 'swiper/core';

SwiperCore.use([Autoplay, Pagination]);

const Base = styled.div`
    width: 630px;
    height: 610px;
`

export default function Slider() {
    return (
        <Base>
            <Swiper pagination={true} loop={true} autoplay={{ "delay": 1500, "disableOnInteraction": false }} className="Slider">
                <SwiperSlide><img src={Slide1} /></SwiperSlide>
                <SwiperSlide><img src={Slide2} /></SwiperSlide>
                <SwiperSlide><img src={Slide3} /></SwiperSlide>
                <SwiperSlide><img src={Slide4} /></SwiperSlide>
                <SwiperSlide><img src={Slide5} /></SwiperSlide>
            </Swiper>
        </Base>
    )
}