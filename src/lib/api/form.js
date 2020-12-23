import axios from 'axios';
import { IMAGE_API_URL, ARTICLE_API_URL } from '../../config/config';

const headers = {
    headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
};

export const uploadImages = async (data) =>
    await Promise.all(
        Array.from(data).map(async (image) => {
            const formData = new FormData();
            formData.append('attachment', image);
            await axios.post(IMAGE_API_URL, formData, headers);
        })
    );
export const uploadArticle = async (data) => await axios.post(ARTICLE_API_URL, data, headers);
