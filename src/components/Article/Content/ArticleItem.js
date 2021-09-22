import React from 'react';

import history from '../../../utils/lib/history';
import { MEDIA_API_URL } from '../../../config/config';

import './ArticleItem.scss';
import notFoundImage from '../../../assets/not-found-image.jpg';

const ArticleItem = ({ title, clubs, content, thumbnail, files, kinds, participants, youtubeURLs, urls }) => {
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
        <div className="ArticleItem" onClick={() => { history.push({
            pathname: `/article/${urls}`,
            state: {id: urls}
          }); }}>
            <div className="ArticleItem-images">
                <img className="image" src={thumbnail != "" ? `${MEDIA_API_URL}/${thumbnail}` : `${notFoundImage}`} />
            </div>
            <div className="contents">
                <div className="ArticleItem-content">
                    <pre>{title}</pre>
                </div>
                <div className="ArticleItem-info">
                    <div className="ArticleItem-pre">
                        <pre>참가자: </pre>
                        {participants.map((name, idx) => (
                            <pre id={idx}>{name} </pre>
                        ))}
                    </div>
                    <div className="ArticleItem-pre">
                        <pre>참여동아리: </pre>
                        {clubs.length > 0 ? (clubs.map((name, idx) => (<pre className="ArticlePage-pre" id={idx}>{name} </pre>))) : (<pre>없음</pre>)}
                    </div>
                    <div className="ArticleItem-pre">
                        <pre>분야: </pre>
                        {kinds.map((name, idx) => (
                            <pre id={idx}>{name} </pre>
                        ))}
                    </div>
                </div>
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
        </div>
    );
};

export default ArticleItem;