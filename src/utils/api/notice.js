import axios from 'axios';

import { NOTICEBOARD_API_URL } from '../../config/config';
import { createQueryString } from '../../utils/lib/queryString';

const headers = {
    headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
};

export const readListNotice = async (data) => {
    const queryString = createQueryString(data);
    const response = await axios.get(`${NOTICEBOARD_API_URL}?${queryString}`);
    return response.data;
};
export const readAnNotice = async (data) => await axios.get(`${NOTICEBOARD_API_URL}/${data}`);
export const updateNotice = async (data) =>
    await axios.patch(`${NOTICEBOARD_API_URL}/${data.id}`, data.updateData, headers);
export const deleteNotice = async (data) => await axios.delete(`${NOTICEBOARD_API_URL}/${data}`, headers);
