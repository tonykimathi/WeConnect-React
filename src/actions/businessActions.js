import * as types from './actionTypes';
import axios from 'axios';
import {api_url, requestHeader} from '../config';
import {browserHistory} from 'react-router';
import { logoutUser } from './logoutActions';

export const getAllBusinesses = () => {
    return dispatch => {
        const get_businesses_url = `${api_url}businesses`;
        axios.get(get_businesses_url)
        .then(res => {
            const businesses = res.data.all_businesses;
            dispatch({ type: types.GET_ALL_BUSINESSES, payload: { businesses } });
        })
        .catch(error => {
            if (error.response.status === 401) {
                dispatch({ type: types.GET_ALL_BUSINESSES_ERROR, payload: {error: error.response.data.message} });
            };
        })
    };
};

export const getSingleBusiness = data => {
    return dispatch => {
        const get_single_businesses_url = `${api_url}businesses/${data.business_id}`;
        axios.get(get_single_businesses_url)
        .then(res => {
            const business = res.data.single_business;
            dispatch({ type: types.GET_SINGLE_BUSINESS, payload: { business } });
        })
        .catch(error => {
            if (error.response.status === 401) {
                dispatch({ type: types.GET_SINGLE_BUSINESS_ERROR, payload: {error: error.response.data.message} });
            };
        })
    };
};

export const createBusiness = data => {
    return dispatch => {
        const businesses_url = `${api_url}businesses`;
        axios.post(businesses_url, 
            {business_name: data.business_name,
             description: data.description,
             category: data.category,
             location: data.location},
            {headers: requestHeader(data.auth_token)}
        )
        .then(res => {
            const message = res.data.message;
            dispatch({ type: types.CREATE_BUSINESS, payload: {message} });
            browserHistory.push('/businesses');
        })
        .catch(error => {
            if (error.response.status === 401) {
                dispatch({ type: types.CREATE_BUSINESS_ERROR, payload: {error: error.response.data.message} });
            };
        })
    };
    
};

export const editBusiness = data => {
    return dispatch => {
        console.log(data)
        const edit_businesses_url = `${api_url}businesses/${data.business_id}`;
        axios.put(edit_businesses_url, 
            {businessName: data.business_name,
             description: data.description,
             category: data.category,
             location: data.location},
            {headers: requestHeader(data.auth_token)}
        )
        .then(res => {
            const message = res.data.message;
            dispatch({ type: types.EDIT_BUSINESS, payload: {message} });
            browserHistory.push('/businesses');
        })
        .catch(error => {
            if (error.response.status === 403) {
                dispatch({ type: types.EDIT_BUSINESS_ERROR, payload: {error: error.response.data.message} });
            };
        })
    };
    
};

export const deleteBusiness = data => {
    return dispatch => {
        const delete_businesses_url = `${api_url}businesses/${data.business_id}`;
        axios.delete(delete_businesses_url,
            {headers: requestHeader(data.auth_token)}
        )
        .then(res => {
            const message = res.data.message;
            dispatch({ type: types.DELETE_BUSINESS, payload: {message} });
            browserHistory.push('/businesses');
        })
        .catch(error => {
            if (error.response.status === 401) {
                dispatch(logoutUser({ auth_token: data.auth_token }));
            };
        })
    };
    
};