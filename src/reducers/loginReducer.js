import * as types from '../actions/actionTypes';

const initialState = {
    username: localStorage.getItem('username'),
    auth_token: localStorage.getItem('auth_token'),
    email: localStorage.getItem('email'),
    loggedIn: JSON.parse(localStorage.getItem('loggedIn')),
    error: null,
    message: ''
  };

export default function loginReducer(state=initialState, action) {
    switch (action.type) {
        case types.LOGIN_USER:
        return {...state,
            username: action.payload.username,
            auth_token: action.payload.auth_token,
            email: action.payload.email,
            message: 'Login Success',
            loggedIn: true
        };
        case types.LOGIN_ERROR:
        return {...state,
            message: action.payload,
            loggedIn: false,
            error: true
        };

    default:
        return {...state}
    }
}