import React from 'react';
import { useHistory } from 'react-router';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import axios from 'axios';

import { ARTICLE_API_URL, IMAGE_API_URL } from '../../config/config';

import './ButtonForm.scss';

const ButtonForm = ({ category, participants, clubs, kinds, content, uploadedImages }) => {
    const history = useHistory();

    const onPostUpload = async () => {
        console.log(await onFileUpload());
        console.log(category, participants, clubs, kinds);
        const headers = {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        };
        const result = await Promise.all(
            uploadedImages.map(async (image) => {
                const formData = new FormData();
                formData.append('attachment', image);

                return await axios.post(IMAGE_API_URL, formData, headers).then((res) => res.data.filename);
            })
        );

        const data = {
            isContestWork: category,
            participants: participants,
            clubs: clubs,
            content: draftToHtml(convertToRaw(content.getCurrentContent())),
            kinds: kinds,
        };

        // axios
        //     .post(ARTICLE_API_URL, data, headers)
        //     .then((res) => history.push('/'))
        //     .catch((err) => console.dir(err));
    };

    const onFileUpload = async () => {
        const headers = {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        };
        console.log(uploadedImages);
        console.log(draftToHtml(convertToRaw(content.getCurrentContent())));
        // const a = await Promise.all(
        //     uploadedImages.map(async (image) => {
        //         const formData = new FormData();
        //         formData.append('attachment', image);

        //         return await axios.post(IMAGE_API_URL, formData, headers).then((res) => res.data.filename);
        //     })
        // );
        // console.log(a);
    };

    return (
        <div className="ButtonForm">
            <input type="button" className="cancel" value="취소" onClick={() => history.push('/admin')} />
            <input type="button" className="save" value="저장" onClick={onPostUpload} />
            <input type="button" value="check" onClick={onFileUpload} />
        </div>
    );
};

export default ButtonForm;
