import React, { useEffect } from 'react';
import { Spin, Image, PageHeader, Descriptions } from 'antd';
import YouTube from 'react-youtube';

import Header from '../Header/Header';
import history from '../../../utils/lib/history';
import { MEDIA_API_URL } from '../../../config/config';
import { getYtpSize } from '../../../utils/lib/getYtpSize';

import './NoticeItem.scss';
import { LoadingOutlined } from '@ant-design/icons';
import notFoundImage from '../../../assets/not-found-image.jpg';

const NoticeItem = ({
    match,
    title,
    content,
    files,
    youtubeURLs,
    createdAt,
    updatedAt,
    writer,
    readingStatus,
    readAnNotice,
}) => {
    useEffect(() => {
        readAnNotice(match.params.id);
    }, []);

    let ytpSize = getYtpSize();
    let splittedFiles = { images: [], pdfs: [], zips: [] };
    files.map((file) => {
        if (file.indexOf('.jpg') !== -1 || file.indexOf('.jpeg') !== -1 || file.indexOf('.png') !== -1)
            splittedFiles.images.push(file);
        else if (file.indexOf('.pdf') !== -1) splittedFiles.pdfs.push(file);
        else if (file.indexOf('.zip') !== -1) splittedFiles.zips.push(file);
    });
    files = splittedFiles;

    return (
        <div className="NoticeItem">
            <Header />
            {readingStatus.loading ? (
                <Spin
                    indicator={<LoadingOutlined style={{ margin: '20px auto', fontSize: '50px' }} spin />}
                />
            ) : (
                <div className="NoticeItem-wrapper">
                    <PageHeader ellipsis={false} onBack={() => history.push('/notice')} title={title}>
                        <Descriptions size="small" column={3}>
                            <Descriptions.Item label="작성자">{writer}</Descriptions.Item>
                            <Descriptions.Item label="작성 날짜">{createdAt.slice(0, 10)}</Descriptions.Item>
                            <Descriptions.Item label="수정 날짜">{updatedAt.slice(0, 10)}</Descriptions.Item>
                        </Descriptions>
                    </PageHeader>
                    {files.images.length > 0 ? (
                        <div
                            className={
                                files.images.length < 4 ? 'NoticeItem-images-few' : 'NoticeItem-images-lot'
                            }>
                            <Image.PreviewGroup>
                                {files.images.map((image, idx) => (
                                    <div key={idx} className="NoticeItem-image-wrapper">
                                        <Image src={`${MEDIA_API_URL}/${image}`} fallback={notFoundImage} />
                                    </div>
                                ))}
                            </Image.PreviewGroup>
                        </div>
                    ) : null}
                    <div className="NoticeItem-content">
                        <p>{content}</p>
                    </div>
                    {youtubeURLs.length > 0 && (
                        <div className="NoticeItem-youtube">
                            {youtubeURLs.map((url, idx) => (
                                <YouTube videoId={url} opts={ytpSize} key={idx} />
                            ))}
                        </div>
                    )}
                    <div className="NoticeItem-file">
                        {files.pdfs.length > 0 && (
                            <div className="NoticeItem-file-pdf">
                                pdf 파일:{' '}
                                {files.pdfs.map((pdf, idx) => (
                                    <a
                                        href={`${MEDIA_API_URL}/${pdf}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        key={idx}>
                                        {pdf + ' '}
                                    </a>
                                ))}
                            </div>
                        )}
                        {files.zips.length > 0 && (
                            <div className="NoticeItem-file-zip">
                                zip 파일:{' '}
                                {files.zips.map((file, idx) => (
                                    <a
                                        href={`${MEDIA_API_URL}/${file}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        key={idx}>
                                        {file + ' '}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NoticeItem;
