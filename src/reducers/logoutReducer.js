import * as types from '../actions/actionTypes';

const initialState = {
    loggedIn: JSON.parse(localStorage.getItem('loggedIn')),
    message: ''
  };

export default function logoutReducer(state=initialState, action) {
    switch (action.type) {
        case types.LOGOUT_USER:
        return {...state,
            loggedIn: false,
            message: 'Logout Success'
        };

    default:
        return {...state}
    }
}