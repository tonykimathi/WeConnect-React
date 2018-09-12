import {combineReducers} from 'redux';
import Register from './registerReducer';
import Login from './loginReducer';
import Business from './businessReducer';
import {fetchBusinesses, fetchSingleBusiness} from './fetchBusinessReducer';
import {createReview, fetchReviews} from './reviewReducer';

const rootReducer = combineReducers({
    Register,
    Login,
    Business,
    fetchBusinesses,
    fetchSingleBusiness,
    createReview,
    fetchReviews
});

export default rootReducer;