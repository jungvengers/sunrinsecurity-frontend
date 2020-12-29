import { createAction } from 'redux-actions';

export const INIT_USERNAME = 'auth/INIT_USERNAME';

export const LOGIN_LOADING = 'auth/LOGIN_LOADING';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'auth/LOGIN_ERROR';

export const REGISTER_LOADING = 'auth/REGISTER_LOADING';
export const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
export const REGISTER_ERROR = 'auth/REGISTER_ERROR';

export const loginAsync = createAction(LOGIN_LOADING, (input) => input);
export const registerAsync = createAction(REGISTER_LOADING, (input) => input);
