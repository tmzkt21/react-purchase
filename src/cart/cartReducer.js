import React from 'react';
import {toast} from "react-toastify";

/* type */
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const INCREMENT_QTY = 'INCREMENT_QTY'
const DECREMENT_QTY = 'DECREMENT_QTY'

/* actions */
export const addToCart = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))

}
export const addToCartUnsafe = (product, qty) => ({
    type: ADD_TO_CART,
    product,
    qty
})
export const removeFromCart = product_id => (dispatch) => {
    toast.error("Item Removed from Cart");
    dispatch({
        type: REMOVE_FROM_CART,
        product_id
    })
}
export const incrementQty = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))

}
export const decrementQty = productId => (dispatch) => {
    toast.warn("Item Decrement Qty to Cart");

    dispatch({
        type: DECREMENT_QTY,
        productId})
}

/* reducer */
export const cartReducer = (state = {cart: []}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const productId = action.product.id
            if (state.cart.findIndex(product => product.id === productId) !== -1) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === productId) {
                        cartAcc.push({ ...product, qty: product.qty+1, sum: (product.price*product.discount/100)*(product.qty+1) }) // Increment qty
                    } else {
                        cartAcc.push(product)
                    }
                    return cartAcc
                }, [])
                return { ...state, cart }
            }

            return { ...state, cart: [...state.cart, { ...action.product, qty: action.qty, sum: (action.product.price*action.product.discount/100)*action.qty }] }

        default:
    }
    return state;
}
export default cartReducer