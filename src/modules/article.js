import { createAction, handleActions } from 'redux-actions';

const ADD_ARTICLE = 'article/ADD_ARTICLE';
const REMOVE_ARTICLE = 'article/REMOVE_ARTICLE';

export const addArticle = createAction(ADD_ARTICLE, (input) => input);
export const removeArticle = createAction(REMOVE_ARTICLE, (input) => input);

const initialState = {
    articles: [
        {
            clubs: [],
            content: '<p>helloworld</p>',
            createdAt: '2020-12-03T15:07:11.051Z',
            isContestWork: false,
            kinds: ['algorithm'],
            participants: ['GangYeon Jo', 'WonJoon Yang', 'YeonGyu Kim'],
            updatedAt: '2020-12-03T15:07:11.051Z',
            writer: 'the_test_user',
            __v: 0,
            _id: 'awe23423g42yu3423gu4',
        },
    ],
};

const todos = handleActions(
    {
        [ADD_ARTICLE]: (state, action) => ({ ...state, articles: state.articles.concat(action.payload) }),
        [REMOVE_ARTICLE]: (state, action) => ({
            ...state,
            articles: state.articles.filter((article) => article._id !== action.payload),
        }),
    },
    initialState
);

export default todos;
