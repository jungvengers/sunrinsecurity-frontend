import React from "react";
import ImgSlide from "./Content/ImgSlide"
import Table from "./Content/Table"
import Header from '../Header/Header';

const Home = ({ notices, readingStatus, readListNotice }) => {
    return (
        <div>
            <Header />
            <ImgSlide />
            <Table notices={notices} readingStatus={readingStatus} readListNotice={readListNotice} />
        </div>
    )
}

export default Home;