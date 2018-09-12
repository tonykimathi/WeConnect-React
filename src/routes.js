import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';
import BusinessesPage from './components/businesses/BusinessesPage';
import RegisterBusinessPage from './components/businesses/RegisterBusinessPage';
import SingleBusinessPage from './components/businesses/SingleBusinessPage';
import EditBusinessPage from './components/businesses/EditBusinessPage';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path='login' component={LoginPage} />
        <Route path='signup' component={SignupPage} />
        <Route path='businesses' component={BusinessesPage} />
        <Route path='businesses/:id' component={SingleBusinessPage} />
        <Route path='registerBusiness' component={RegisterBusinessPage} />
        <Route path='editBusiness/:id' component={EditBusinessPage} />
    </Route>
);
