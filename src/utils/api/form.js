import axios from 'axios';
import { MEDIA_UPLOAD_API_URL, ARTICLE_API_URL, NOTICEBOARD_API_URL } from '../../config/config';

const headers = {
    headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
};

export const uploadImages = async (data) => {
    if (data.length < 1) return [];
    return await Promise.all(
        Array.from(data).map(async (image) => {
            const formData = new FormData();
            formData.append('attachment', image);
            const response = await axios.post(MEDIA_UPLOAD_API_URL, formData, headers);
            return response.data.filename;
        })
    );
};

export const uploadThumbnail = async (data) => {
    if (!data) return '';
    const formData = new FormData();
    formData.append('attachment', data);
    const response = await axios.post(MEDIA_UPLOAD_API_URL, formData, headers);
    return response.data.filename;
};
export const uploadArticle = async (data) => await axios.post(ARTICLE_API_URL, data, headers);
export const uploadNotice = async (data) => await axios.post(NOTICEBOARD_API_URL, data, headers);