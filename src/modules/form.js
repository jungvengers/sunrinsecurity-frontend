import { createAction, handleActions } from 'redux-actions';

const TOGGLE_CATEGORY = 'form/TOGGLE_CATEGORY';
const ADD_PARTICIPANT = 'form/ADD_PARTICIPANT';
const ADD_CLUB = 'form/ADD_CLUB';
const ADD_KIND = 'form/ADD_KIND';
const CHANGE_CONTENT = 'form/CHANGE_CONTENT';
const ADD_IMAGE = 'form/ADD_IMAGE';

export const toggleCategory = createAction(TOGGLE_CATEGORY, (input) => input);
export const addParticipant = createAction(ADD_PARTICIPANT, (input) => input);
export const addClub = createAction(ADD_CLUB, (input) => input);
export const addKind = createAction(ADD_KIND, (input) => input);
export const changeContent = createAction(CHANGE_CONTENT, (input) => input);
export const addImage = createAction(ADD_IMAGE, (input) => input);
// export const

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
        [TOGGLE_CATEGORY]: (state, action) => ({ ...state, category: action.payload }),
        [ADD_PARTICIPANT]: (state, action) => ({
            ...state,
            participants: state.participants.concat(action.payload),
        }),
        [ADD_CLUB]: (state, action) => ({
            ...state,
            clubs: state.clubs.concat(action.payload),
        }),
        [ADD_KIND]: (state, action) => ({
            ...state,
            kinds: state.kinds.concat(action.payload),
        }),
        [CHANGE_CONTENT]: (state, action) => ({
            ...state,
            content: action.payload,
        }),
        [ADD_IMAGE]: (state, action) => ({
            ...state,
            uploadedImages: state.uploadedImages.concat(action.payload),
        }),
    },
    initialState
);

export default form;
