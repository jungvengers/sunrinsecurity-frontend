import React, { useState, useLayoutEffect } from 'react';
import { Layout } from 'antd';
import { getYtpSize } from '../../../utils/lib/getYtpSize';

import Header from '../../Header/Header';

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

    // files.map((file) => {
    //     if (file.indexOf('.jpg') !== -1 || file.indexOf('.jpeg') !== -1 || file.indexOf('.png') !== -1)
    //         splittedFiles.images.push(file);
    //     else if (file.indexOf('.pdf') !== -1) splittedFiles.pdfs.push(file);
    //     else if (file.indexOf('.zip') !== -1) splittedFiles.zips.push(file);
    // });
    // files = splittedFiles;
    console.log(files);

    const detectUrls = () => ({
        __html: content.replaceAll(urlRegex, (url) => {
            return `<a href="${url}" target="_blank">${url}</a>`;
        }),
    });

    useLayoutEffect(() => {
        readAnArticle(match.params.id);
    }, []);

    return (
        <Layout className="Article" style={{ height: '100vh' }}>
            <Header />
            <Layout style={{ height: '90%', overflow: 'hidden' }}>
                <Layout.Content
                    className="site-layout-background"
                    style={{
                        height: '100%',
                        padding: '24, 24, 0, 24',
                        margin: 0,
                        minHeight: 280,
                    }}>
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default ArticleItemPage;