import { ADD_TO_CART, REMOVE_TO_CART } from '../../settings/consts';
const INITIAL_STATE = {
    products: []
}

export function cartReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_TO_CART:
            return { ...state, products: state.products.concat(action.payload) }
        case REMOVE_TO_CART:
            const products = state.products.filter(product => product !== action.payload)
            return { ...state, products: products }
        default:
            return state;
    }
}