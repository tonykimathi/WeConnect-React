import * as types from './actionTypes';

export function registerUser(user) {
    return { type: types.REGISTER_USER, user}
}