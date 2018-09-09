import * as types from './actionTypes';
import axios from 'axios';
import {api_url, requestHeader} from '../config';
import {browserHistory} from 'react-router';

export const logoutUser = data => {
    return dispatch => {
        const logout_url = `${api_url}logout`;
        axios.post(logout_url, {headers: requestHeader(data.auth_token)})
        .then(res => {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            localStorage.removeItem('auth_token');
            localStorage.removeItem('loggedIn');
            dispatch({ type: types.LOGOUT_USER, payload: { message: res.data.message } });
            browserHistory.push('/login');
        })
        .catch(error => {
            if (error.response.status === 401) {
                const message = 'Your session has expired. Login to continue.';
                dispatch({ type: types.LOGOUT_USER, payload: {message} });
                localStorage.removeItem('email');
                localStorage.removeItem('password');
                localStorage.removeItem('auth_token');
                localStorage.removeItem('loggedIn');
                browserHistory.push('/login');
            };
        })
    };
    
};