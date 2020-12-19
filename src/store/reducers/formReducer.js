import { handleActions } from 'redux-actions';

import * as actions from '../actions/formAction';

const initialState = {
    category: null,
    participants: [],
    clubs: [],
    kinds: [],
    content: null,
    uploadedImages: [],
};

const form = handleActions(
    {
        [actions.TOGGLE_CATEGORY]: (state, action) => ({ ...state, category: action.payload }),
        [actions.ADD_PARTICIPANT]: (state, action) => ({
            ...state,
            participants: state.participants.concat(action.payload),
        }),
        [actions.ADD_CLUB]: (state, action) => ({
            ...state,
            clubs: state.clubs.concat(action.payload),
        }),
        [actions.ADD_KIND]: (state, action) => ({
            ...state,
            kinds: state.kinds.concat(action.payload),
        }),
        [actions.CHANGE_CONTENT]: (state, action) => ({
            ...state,
            content: action.payload,
        }),
        [actions.ADD_IMAGE]: (state, action) => ({
            ...state,
            uploadedImages: state.uploadedImages.concat(action.payload),
        }),
    },
    initialState
);

export default form;
