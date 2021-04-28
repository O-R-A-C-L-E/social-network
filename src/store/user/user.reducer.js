import * as Types from "../actions/types";

const initialState = {
    data: {},

}

export function user(state = initialState, action) {
    switch (action.type) {
        case Types.SET_USERINFO:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state;
    }
}