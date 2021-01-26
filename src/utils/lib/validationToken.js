import axios from 'axios';

import { USER_VALIDATION_API_URL } from '../../config/config';
import history from './history';

export default async () => {
    try {
        const token = localStorage.getItem('accessToken');
        if (token !== null) {
            const headers = {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            };
            await axios.get(USER_VALIDATION_API_URL, headers);
        }
    } catch (error) {
        localStorage.removeItem('accessToken');
        history.push('/');
    }
};
