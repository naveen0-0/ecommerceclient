import { combineReducers } from 'redux';
import { authReducer } from './authReducer.js'
import { serverUrlReducer } from './serverUrlReducer'

export const rootReducer = combineReducers({
    auth:authReducer,
    serverUrl:serverUrlReducer
})