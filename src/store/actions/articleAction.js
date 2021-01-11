import { createAction } from 'redux-actions';

export const INIT_ARTICLE = 'article/INIT_ARTICLE';
export const ADD_ARTICLE = 'article/ADD_ARTICLE';
export const REMOVE_ARTICLE = 'article/REMOVE_ARTICLE';

export const READ_ARTICLE_LOADING = 'article/READ_ARTICLE_LOADING';
export const READ_ARTICLE_SUCCESS = 'article/READ_ARTICLE_SUCCESS';
export const READ_ARTICLE_ERROR = 'article/READ_ARTICLE_ERROR';

export const READ_MORE_ARTICLE_LOADING = 'article/READ_MORE_ARTICLE_LOADING';
export const READ_MORE_ARTICLE_SUCCESS = 'article/READ_MORE_ARTICLE_SUCCESS';
export const READ_MORE_ARTICLE_ERROR = 'article/READ_MORE_ARTICLE_ERROR';

export const UPDATE_ARTICLE_LOADING = 'article/UPDATE_ARTICLE_LOADING';
export const UPDATE_ARTICLE_SUCCESS = 'article/UPDATE_ARTICLE_SUCCESS';
export const UPDATE_ARTICLE_ERROR = 'article/UPDATE_ARTICLE_ERROR';

export const DELETE_ARTICLE_LOADING = 'article/DELETE_ARTICLE_LOADING';
export const DELETE_ARTICLE_SUCCESS = 'article/DELETE_ARTICLE_SUCCES';
export const DELETE_ARTICLE_ERROR = 'article/DELETE_ARTICLE_ERROR';

export const readArticleAsync = createAction(READ_ARTICLE_LOADING, (input) => input);
export const readMoreArticleAsync = createAction(READ_MORE_ARTICLE_LOADING, (input) => input);
export const updateArticleAsync = createAction(UPDATE_ARTICLE_LOADING, (input) => input);
export const deleteArticleAsync = createAction(DELETE_ARTICLE_LOADING, (input) => input);
