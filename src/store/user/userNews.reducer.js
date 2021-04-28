import * as Types from '../actions/types';

const initialState = {
    posts: [],
    errors: [],
}


export function userNews(state = initialState, action){
    switch (action.type){
        case Types.SET_NEWS:
            return {
                ...state,
                posts: action.payload,
            };
        case Types.SET_ERRORS:
            return {
                ...state,
                errors: state.errors.push(action.payload),
            };
        default:
            return state;
    }
}
