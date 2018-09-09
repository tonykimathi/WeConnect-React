import * as types from '../actions/actionTypes';

const initialState = {
    error: null,
    message: ''
  };

export default function registerReducer(state=initialState, action) {
    switch (action.type) {
        case types.REGISTER_USER:
        return {...state,
            message: 'Register Success'
        };
        case types.REGISTER_ERROR:
        return {...state,
            message: action.payload.error,
            error: true
        };

    default:
        return {...state}
    }
}