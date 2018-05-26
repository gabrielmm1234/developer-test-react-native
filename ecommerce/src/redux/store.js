import { combineReducers } from 'redux';
import { productReducer } from './reducers/productReducer';

export const store = combineReducers({
    products: productReducer
})