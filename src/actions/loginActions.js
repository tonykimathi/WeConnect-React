import * as types from './actionTypes';
import axios from 'axios';
import {api_url} from '../config';
import {browserHistory} from 'react-router';

export const loginUser = data => {
    return dispatch => {
        const login_url = `${api_url}login`;
        axios.post(login_url, {email: data.email, password: data.password})
        .then(res => {
            const auth_token = res.data.auth_token;
            const email = res.data.email;
            const password = res.data.password;
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('auth_token', auth_token);
            localStorage.setItem('loggedIn', true);
            dispatch({ type: types.LOGIN_USER, payload: {auth_token, email, password} });
            browserHistory.push('/businesses');
        })
        .catch(error => {
            if (error.response.status === 401) {
                dispatch({ type: types.LOGIN_ERROR, payload: {error: error.response.data.message} });
            };
        })
    };
    
};