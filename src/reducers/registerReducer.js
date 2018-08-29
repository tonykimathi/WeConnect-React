import * as types from '../actions/actionTypes';

const initialState = {
    error: null
  };

export default function registerReducer(state=initialState, action) {
    switch (action.type) {
        case types.REGISTER_USER:
        return [...state,
            Object.assign({}, action.payload)
        ];
        case types.REGISTER_ERROR:
        return [...state,
            Object.assign({}, action.payload)
        ];

    default:
        return state
    }
}