import React from 'react';
import { Image } from 'antd';
import YouTube from 'react-youtube';

import { MEDIA_API_URL } from '../../../config/config';
import { getYtpSize } from '../../../utils/lib/getYtpSize';

import './ArticleItem.scss';
import notFoundImage from '../../../assets/not-found-image.jpg';

const ArticleItem = ({ clubs, content, files, kinds, participants, youtubeURLs }) => {
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

    return (
        <div className="ArticleItem">
            {files.images.length > 0 ? (
                <div
                    className={files.images.length < 4 ? 'ArticleItem-images-few' : 'ArticleItem-images-lot'}>
                    <Image.PreviewGroup>
                        {files.images.map((image, idx) => (
                            <div key={idx} className="ArticleItem-image-wrapper">
                                <Image src={`${MEDIA_API_URL}/${image}`} fallback={notFoundImage} />
                            </div>
                        ))}
                    </Image.PreviewGroup>
                </div>
            ) : null}
            <div className="ArticleItem-content">
                <pre dangerouslySetInnerHTML={detectUrls()}></pre>
            </div>
            <div className="ArticleItem-detail-info">
                <div className="ArticleItem-participants">
                    <h2>참여자</h2>
                    {participants.map((name, idx) => (
                        <li key={idx}>{name}</li>
                    ))}
                </div>
                {clubs.length > 0 && (
                    <div className="ArticleItem-clubs">
                        <h2>기여한 동아리</h2>
                        {clubs.map((club, idx) => (
                            <li key={idx}>{club}</li>
                        ))}
                    </div>
                )}
                <div className="ArticleItem-kinds">
                    <h2>분야</h2>
                    {kinds.map((kind, idx) => (
                        <li key={idx}>{kind}</li>
                    ))}
                </div>
            </div>
            {youtubeURLs.length > 0 && (
                <div className="ArticleItem-youtube">
                    {youtubeURLs.map((url, idx) => (
                        <YouTube videoId={url} opts={ytpSize} key={idx} />
                    ))}
                </div>
            )}
            <div className="ArticleItem-file">
                {files.pdfs.length > 0 && (
                    <div className="ArticleItem-file-pdf">
                        pdf 파일:{' '}
                        {files.pdfs.map((pdf, idx) => (
                            <a href={`${MEDIA_API_URL}/${pdf}`} target="_blank" rel="noreferrer" key={idx}>
                                {pdf.split('-').splice(1).join('-') + ' '}
                            </a>
                        ))}
                    </div>
                )}
                {files.zips.length > 0 && (
                    <div className="ArticleItem-file-zip">
                        zip 파일:{' '}
                        {files.zips.map((zip, idx) => (
                            <a href={`${MEDIA_API_URL}/${zip}`} target="_blank" rel="noreferrer" key={idx}>
                                {zip.split('-').splice(1).join('-') + ' '}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ArticleItem;
