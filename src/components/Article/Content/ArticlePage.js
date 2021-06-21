import React, { useState, useEffect } from 'react';
import { Image } from 'antd';
import YouTube from 'react-youtube';
import { Swiper, SwiperSlide } from "swiper/react";

import { getYtpSize } from '../../../utils/lib/getYtpSize';
import { MEDIA_API_URL } from '../../../config/config';
import notFoundImage from '../../../assets/not-found-image.jpg';

import Header from '../../Header/Header';
import './ArticlePage.scss';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const ArticleItemPage = ({
    match,
    participants,
    clubs,
    kinds,
    content,
    files,
    youtubeURLs,
    readingStatus,
    readAnArticle
}) => {
    let ytpSize = getYtpSize();
    let splittedFiles = { images: [], pdfs: [], zips: [] };
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    files.map((file) => {
        if (file.indexOf('.jpg') !== -1 || file.indexOf('.jpeg') !== -1 || file.indexOf('.png') !== -1)
            splittedFiles.images.push(file);
        else if (file.indexOf('.pdf') !== -1) splittedFiles.pdfs.push(file);
        else if (file.indexOf('.zip') !== -1) splittedFiles.zips.push(file);
    });
    files = splittedFiles;

    const detectUrls = () => ({
        __html: content.replaceAll(urlRegex, (url) => {
            return `<a href="${url}" target="_blank">${url}</a>`;
        }),
    });

    useEffect(() => {
        readAnArticle(match.params.id);
    }, []);

    return (
        <div className="">
            <Header/>
            <div className="Page">
                <div className="PageContainer">
                    <div className="PageContents">
                        <div className="image">
                            <Swiper pagination={true} className="Slider">
                                {files.images.map((image, idx) => (
                                    <SwiperSlide><img src={`${MEDIA_API_URL}/${image}`}/></SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="content">
                            <div>
                                
                            </div>
                            <pre dangerouslySetInnerHTML={detectUrls()}></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleItemPage;