import {createStore} from 'redux'
import {combineReducers} from "redux";
import {userNews} from "./user/userNews.reducer";
import {user} from "./user/user.reducer";

const rootReducer = combineReducers({
    userNews,
    user,
});

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())