import { combineReducers } from 'redux';
import  orderReducer  from './orderReducer.js';

const rootReducer = combineReducers({
    orders: orderReducer
});



export default rootReducer;
