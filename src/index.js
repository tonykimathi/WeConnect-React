import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />, 
    document.getElementById('root'));
registerServiceWorker();
