import axios from 'axios';

import { ARTICLE_API_URL } from '../../config/config';
import { createQueryString } from '../../utils/lib/queryString';

const headers = {
    headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
};

// res -> response
export const readArticle = async (data) => {
    const queryString = createQueryString(data);
    const response = await axios.get(`${ARTICLE_API_URL}?${queryString}`);
    return response.data.articles;
};
export const updateArticle = async (data) => await axios.update(`${ARTICLE_API_URL}/${data}`, data, headers);
export const deleteArticle = async (data) => await axios.delete(`${ARTICLE_API_URL}/${data}`, headers);
