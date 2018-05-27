import { ADD_TO_CART, REMOVE_TO_CART } from '../../settings/consts';

export function addProductToCart(product) {
    return dispatch => {
        dispatch({
            type: ADD_TO_CART,
            payload: product
        })
    }
}

export function removeProductToCart(product) {
    return dispatch => {
        dispatch({
            type: REMOVE_TO_CART,
            payload: product
        })
    }
}
