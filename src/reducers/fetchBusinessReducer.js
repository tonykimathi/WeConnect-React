import * as types from '../actions/actionTypes';

const businessesInitialState = {
    businesses: [],
    message: '',
    error: null
};
const singleBusinessInitialState = {
    business: {},
    message: '',
    error: null
};

export const fetchBusinesses = (state=businessesInitialState, action) => {
    switch (action.type) {
        case types.GET_ALL_BUSINESSES:
        return {...state,
            message: 'Business retrieved successfully',
            businesses: action.payload.businesses,
            error: false
        };
        case types.GET_ALL_BUSINESSES_ERROR:
        return {...state,
            message: action.payload,
            error: true
        };
        default:
        return {...state}
    }
};

export const fetchSingleBusiness = (state=singleBusinessInitialState, action) => {
    switch (action.type) {
        case types.GET_SINGLE_BUSINESS:
        return {...state,
            message: 'Business retrieved successfully',
            business: action.payload,
            error: false
        };
        case types.GET_SINGLE_BUSINESS_ERROR:
        return {...state,
            message: action.payload,
            error: true
        };
        default:
        return {...state}
    }
};
