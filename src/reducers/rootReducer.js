import {combineReducers} from 'redux';
import Register from './registerReducer';
import Login from './loginReducer';
import Logout from './logoutReducer';

const rootReducer = combineReducers({
    Register,
    Login,
    Logout
});

export default rootReducer;