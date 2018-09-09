import * as types from '../actions/actionTypes';

const initialState = {
    message: '',
    error: null,
    auth_token: localStorage.getItem('auth_token')
};

export default function businessReducer(state=initialState, action) {
    switch (action.type) {
        case types.CREATE_BUSINESS:
        return {...state,
            message: action.payload,
            error: false
        };
        case types.CREATE_BUSINESS_ERROR:
        return {...state,
            message: action.payload,
            error: true
        };
        case types.EDIT_BUSINESS:
        return {...state,
            message: action.payload,
            error: false
        };
        case types.EDIT_BUSINESS_ERROR:
        return {...state,
            message: action.payload,
            error: true
        };
        case types.DELETE_BUSINESS:
        return {...state,
            message: action.payload,
            error: false
        };
        case types.DELETE_BUSINESS_ERROR:
        return {...state,
            message: action.payload,
            error: true
        };
        default:
        return {...state}
    }
};