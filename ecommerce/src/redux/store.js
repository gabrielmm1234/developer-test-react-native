import { combineReducers } from 'redux';
import { productReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

export const store = combineReducers({
    products: productReducer,
    cart: cartReducer
})