import * as types from '../actions/actionTypes';

const initialState = {
    message: '',
    error: null,
    auth_token: localStorage.getItem('auth_token')
};

const reviewsInitialState = {
    reviews: [],
    message: '',
    error: null
};

export const createReview = (state=initialState, action)  => {
    switch (action.type) {
        case types.CREATE_REVIEW:
        return {...state,
            message: action.payload,
            error: false
        };
        case types.CREATE_REVIEW_ERROR:
        return {...state,
            message: action.payload,
            error: true
        };
        default:
        return {...state}
    }
};

export const fetchReviews = (state=reviewsInitialState, action) => {
    switch (action.type) {
        case types.GET_ALL_REVIEWS:
        return {...state,
            message: 'Reviews retrieved successfully',
            businesses: action.payload.businesses,
            error: false
        };
        case types.GET_ALL_REVIEWS_ERROR:
        return {...state,
            message: action.payload,
            error: true
        };
        default:
        return {...state}
    }
};