import {combineReducers} from 'redux';
import Register from './registerReducer';
import Login from './loginReducer';
import Logout from './logoutReducer';
import Business from './businessReducer';
import {fetchBusinesses, fetchSingleBusiness} from './fetchBusinessReducer';

const rootReducer = combineReducers({
    Register,
    Login,
    Logout,
    Business,
    fetchBusinesses,
    fetchSingleBusiness 
});

export default rootReducer;