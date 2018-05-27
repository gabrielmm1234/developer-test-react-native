import { ADD_TO_CART } from '../../settings/consts';

export function addProductToCart(product) {
    return dispatch => {
        dispatch({
            type: ADD_TO_CART,
            payload: product
        })
    }
}
