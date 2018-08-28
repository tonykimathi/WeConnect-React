// eslint-disable-next-line
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
// import ReduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        // applyMiddleware(ReduxImmutableStateInvariant()),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}