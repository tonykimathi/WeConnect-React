import * as types from './actionTypes';

export function loginUser(user) {
    return { type: types.LOGIN_USER, user}
}