const { compose, createStore, combineReducers, applyMiddleware } = Redux;
import token from './token.js';
import user from './user.js';
import localStorage from './middleware/localStorage.js';
import thunk from './middleware/thunk.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancer(applyMiddleware(thunk, localStorage));
const reducer = combineReducers({ token, user });
const store = createStore(reducer, enhancer);

export default store;
