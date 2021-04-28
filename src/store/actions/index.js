import * as Types from './types';

export const setNews = (data) => ({type: Types.SET_NEWS, payload: data});
export const setErrors = (err) => ({type: Types.SET_ERRORS, payload: err});
export const setUserinfo = (userInfo) => ({type:Types.SET_USERINFO, payload:userInfo});