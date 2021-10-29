import  { contactReducer } from './ContactReducer';
import { combineReducers } from 'redux';
export default combineReducers({
    contact:contactReducer
})