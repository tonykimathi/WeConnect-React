import {combineReducers} from 'redux';
import Register from './registerReducer';
import Login from './loginReducer';

const rootReducer = combineReducers({
    Register,
    Login
});

export default rootReducer;