import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Main from "./Content/Main"
import Cir from "./Content/Circles"
import Dep from "./Content/Department"

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "../../styles/fullpage_styles.css";

import Header from '../Header/Header';

import SwiperCore, {
  Pagination
} from 'swiper/core';

SwiperCore.use([Pagination]);

export default function Home() {
    return (
        <>
            <Header />
            <Swiper pagination={true} className="Home">
                <SwiperSlide><Main /></SwiperSlide>
                <SwiperSlide><Dep /></SwiperSlide>
                <SwiperSlide><Cir /></SwiperSlide>
            </Swiper>
        </>
    )
} 