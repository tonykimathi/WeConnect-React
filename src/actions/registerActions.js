import * as types from './actionTypes';
import axios from 'axios';
import {api_url} from '../config';
import {browserHistory} from 'react-router';

export const registerUser = data => {
    
    return dispatch => {
        const register_url = `${api_url}register`;
        axios.post(register_url, {username: data.username,
                                  email: data.email,
                                  password: data.password, 
                                  confirm_password: data.confirm_password})
        .then(res => {
            dispatch({ type: types.REGISTER_USER, payload: {message: res.data.message} });
            browserHistory.push('/login');
        })
        .catch(error => {
            if (error.response.status === 401) {
                console.log(error.response.data.message)
                dispatch({ type: types.REGISTER_ERROR, payload: {error: error.response.data.message} });
            };
        })
    };
    
};