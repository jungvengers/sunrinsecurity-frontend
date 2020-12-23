import { createAction } from 'redux-actions';

export const TOGGLE_CATEGORY = 'form/TOGGLE_CATEGORY';
export const ADD_PARTICIPANT = 'form/ADD_PARTICIPANT';
export const ADD_CLUB = 'form/ADD_CLUB';
export const ADD_KIND = 'form/ADD_KIND';
export const CHANGE_CONTENT = 'form/CHANGE_CONTENT';
export const ADD_IMAGE = 'form/ADD_IMAGE';

export const toggleCategory = createAction(TOGGLE_CATEGORY, (input) => input);
export const addParticipant = createAction(ADD_PARTICIPANT, (input) => input);
export const addClub = createAction(ADD_CLUB, (input) => input);
export const addKind = createAction(ADD_KIND, (input) => input);
export const changeContent = createAction(CHANGE_CONTENT, (input) => input);
export const addImage = createAction(ADD_IMAGE, (input) => input);
