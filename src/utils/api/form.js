import axios from 'axios';
import { IMAGE_API_URL, ARTICLE_API_URL } from '../../config/config';

const headers = {
    headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
};

export const uploadImages = async (data) =>
    await Promise.all(
        Array.from(data.imageFiles).map(async (image) => {
            const formData = new FormData();
            formData.append('attachment', image);
            const response = await axios.post(IMAGE_API_URL, formData, headers);
            return response.data.filename;
        })
    );

export const uploadArticle = async (data) => await axios.post(ARTICLE_API_URL, data, headers);
