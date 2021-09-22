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

export const READ_AN_ARTICLE_LOADING = 'article/READ_AN_ARTICLE_LOADING';
export const READ_AN_ARTICLE_SUCCESS = 'article/READ_AN_ARTICLE_SUCCESS';
export const READ_AN_ARTICLE_ERROR = 'article/READ_AN_ARTICLE_ERROR';

export const readArticleAsync = createAction(READ_ARTICLE_LOADING, (input) => input);
export const readMoreArticleAsync = createAction(READ_MORE_ARTICLE_LOADING, (input) => input);
export const readAnArticleAsync = createAction(READ_AN_ARTICLE_LOADING, (input) => input);
