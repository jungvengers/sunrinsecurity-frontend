import axios from 'axios';
import { USER_LOGIN_API_URL, USER_REGISTER_API_URL } from '../../config/config';

export const login = async (data) => await axios.post(USER_LOGIN_API_URL, data);
export const register = async (data) => await axios.post(USER_REGISTER_API_URL, data);
