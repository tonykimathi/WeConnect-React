import * as types from '../actions/actionTypes';

const initialState = {
    username: localStorage.getItem('username'),
    auth_token: localStorage.getItem('auth_token'),
    email: localStorage.getItem('email'),
    error: null
  };

export default function loginReducer(state=initialState, action) {
    switch (action.type) {
        case types.LOGIN_USER:
        return [...state,
            Object.assign({}, action.payload)
        ];
        case types.LOGIN_ERROR:
        return [...state,
            Object.assign({}, action.payload)
        ]; 

    default:
        return state
    }
}