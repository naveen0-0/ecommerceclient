import { combineReducers } from 'redux';
import { authReducer } from './authReducer.js';
import { serverUrlReducer } from './serverUrlReducer';
import { cartReducer } from './cartReducer'

export const rootReducer = combineReducers({
    auth:authReducer,
    serverUrl:serverUrlReducer,
    cart:cartReducer
})