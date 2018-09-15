import { combineReducers } from 'redux'
import app from './app'
import {routerReducer} from 'react-router-redux'
const store = combineReducers({
    app,
})
export default store
