import * as types from './actionTypes';
import axios from 'axios';
import {api_url, requestHeader} from '../config';

export const getAllReviews = id => {
    return dispatch => {
        const get_reviews_url = `${api_url}businesses/${id}/reviews`;
        axios.get(get_reviews_url)
        .then(res => {
            const reviews = res.data.data;
            dispatch({ type: types.GET_ALL_REVIEWS, payload: { reviews } });
        })
        .catch(error => {
            console.log(error)
            if (error.response.status === 401) {
                dispatch({ type: types.GET_ALL_REVIEWS_ERROR, payload: {error: error.response.data.message} });
            };
        })
    };
};

export const createReview = data => {
    return dispatch => {
        const get_reviews_url = `${api_url}businesses/${data.business_id}/reviews`;
        return axios.post(get_reviews_url, 
            data,
            {headers: requestHeader(data.auth_token)}
        )
        .then(res => {
            const message = res.data.message;
            dispatch({ type: types.CREATE_REVIEW, payload: {message} });
            dispatch(getAllReviews(data.business_id));
        })
        .catch(error => {
            if (error.response.status === 401) {
                dispatch({ type: types.CREATE_REVIEW_ERROR, payload: {error: error.response.data.message} });
            };
        })
    };
    
};