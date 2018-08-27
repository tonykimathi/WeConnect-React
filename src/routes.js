import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path='login' component={LoginPage} />
        <Route path='signup' component={SignupPage} />
    </Route>
);
