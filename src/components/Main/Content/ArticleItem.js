import React from 'react';
import { Image } from 'antd';
import YouTube from 'react-youtube';

import './ArticleItem.scss';

import notFoundImage from '../../../assets/not-found-image.jpg';

const ArticleItem = ({ clubs, content, files, kinds, participants, youtubeURLs }) => {
    let splittedFiles = { images: [], pdfs: [], zips: [] };
    files.map((file) => {
        if (file.indexOf('.jpg') !== -1 || file.indexOf('.jpeg') !== -1 || file.indexOf('.png') !== -1)
            splittedFiles.images.push(file);
        else if (file.indexOf('.pdf') !== -1) splittedFiles.pdfs.push(file);
        else if (file.indexOf('.zip') !== -1) splittedFiles.zips.push(file);
    });
    files = splittedFiles;

    const opts = {
        height: '390',
        width: '640',
    };

    return (
        <div className="ArticleItem">
            <div className={files.images.length < 4 ? 'ArticleItem-images-few' : 'ArticleItem-images-lot'}>
                {/* TODO 링크가 잘못된 경우가 아닌 이미지 가 없을때 예외처리 */}
                <Image.PreviewGroup>
                    {files.images.map((image, idx) => (
                        <div key={idx} className="ArticleItem-image-wrapper">
                            <Image
                                src={`https://api.jungvengers.com/media/${image}`}
                                fallback={notFoundImage}
                            />
                        </div>
                    ))}
                </Image.PreviewGroup>
            </div>
            <div className="ArticleItem-content">
                <p>{content}</p>
            </div>
            <div className="ArticleItem-detail-info">
                <div className="ArticleItem-participants">
                    <h2>참여자</h2>
                    {participants.map((name, idx) => (
                        <li key={idx}>{name}</li>
                    ))}
                </div>
                <div className="ArticleItem-clubs">
                    <h2>기여한 동아리</h2>
                    {clubs.map((club, idx) => (
                        <li key={idx}>{club}</li>
                    ))}
                </div>
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
                        <YouTube videoId={url} opts={opts} key={idx} />
                    ))}
                </div>
            )}
            <div className="ArticleItem-file">
                {files.pdfs.length > 0 && (
                    <div className="ArticleItem-file-pdf">
                        pdf 파일:{' '}
                        {files.pdfs.map((pdf) => (
                            <a href={`https://api.jungvengers.com/media/${pdf}`} target="_blank">
                                {pdf + ' '}
                            </a>
                        ))}
                    </div>
                )}
                {files.zips.length > 0 && (
                    <div className="ArticleItem-file-zip">
                        zip 파일:{' '}
                        {files.zips.map((file) => (
                            <a href={`https://api.jungvengers.com/media/${file}`} target="_blank">
                                {file + ' '}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ArticleItem;
