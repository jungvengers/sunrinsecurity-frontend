import React, { useEffect } from 'react';
import { Spin, Image, PageHeader, Descriptions } from 'antd';
import YouTube from 'react-youtube';
import { Swiper, SwiperSlide } from "swiper/react";

import Header from '../../Header/Header';
import history from '../../../utils/lib/history';
import { MEDIA_API_URL } from '../../../config/config';
import { getYtpSize } from '../../../utils/lib/getYtpSize';

import './ArticlePage.scss';
import notFoundImage from '../../../assets/not-found-image.jpg';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const ArticleItemPage = ({
    match,
    title,
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
        <div className="ArticlePage">
            <Header/>
            <div className="ArticlePage-wrapper">
                <PageHeader
                    style={{ borderBottom: '1px solid #ebedf0' }}
                    ellipsis={false}
                    onBack={() => history.push('/article')}
                    title={title}>
                    <Descriptions size="small" column={3}>
                        <Descriptions.Item label="참가자">
                            {participants.map((name, idx) => (<pre className="ArticlePage-pre" id={idx}>{name} </pre>))}
                        </Descriptions.Item>
                        <Descriptions.Item label="기여한 동아리">
                            {clubs.length > 0 ? (clubs.map((name, idx) => (<pre className="ArticlePage-pre" id={idx}>{name} </pre>))) : (<pre>없음</pre>)}
                        </Descriptions.Item>
                        <Descriptions.Item label="분야">{kinds}</Descriptions.Item>
                    </Descriptions>
                </PageHeader>
                <div className="ArticlePage-content">
                    <div className="images">
                        {files.images.length > 0 ? (
                            <div
                                className={
                                    files.images.length < 4 ? 'NoticeItem-images-few' : 'NoticeItem-images-lot'
                                }>
                                <Image.PreviewGroup>
                                    <Swiper pagination={true} className="Slider">
                                        {files.images.map((image, idx) => (
                                            <SwiperSlide>
                                                <div key={idx} className="NoticeItem-image-wrapper">
                                                    <Image src={`${MEDIA_API_URL}/${image}`} />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </Image.PreviewGroup>
                            </div>
                        ) : <Image src={notFoundImage} />}
                    </div>
                    <div className="contents">
                        <pre dangerouslySetInnerHTML={detectUrls()}></pre>
                    </div>
                </div>
                {youtubeURLs.length > 0 && (
                    <div className="ArticlePage-youtube">
                        <hr className="youtube-line" />
                        <Swiper navigation={true} className="youtube-slider">
                            {youtubeURLs.map((url, idx) => (
                                <SwiperSlide><YouTube videoId={url} opts={ytpSize} key={idx} /></SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ArticleItemPage;