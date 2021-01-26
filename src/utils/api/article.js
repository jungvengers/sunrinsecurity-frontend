import axios from 'axios';

import { ARTICLE_API_URL } from '../../config/config';
import { createQueryString } from '../../utils/lib/queryString';

const headers = {
    headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
};

export const readListArticles = async (data) => {
    const queryString = createQueryString(data);
    const response = await axios.get(`${ARTICLE_API_URL}?${queryString}`);
    return response.data;
};
export const readAnArticle = async (data) => await axios.get(`${ARTICLE_API_URL}/${data}`);
export const updateArticle = async (data) =>
    await axios.patch(`${ARTICLE_API_URL}/${data.id}`, data.updateData, headers);
export const deleteArticle = async (data) => await axios.delete(`${ARTICLE_API_URL}/${data}`, headers);
