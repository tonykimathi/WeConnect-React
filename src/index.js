import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import * as businessActions from './actions/businessActions';
import routes from './routes';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(businessActions.getAllBusinesses(),
               businessActions.getSingleBusiness(),
               businessActions.createBusiness(),
               businessActions.editBusiness(),
               businessActions.deleteBusiness()
            );

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
