import { ADD_TO_CART, DELETE_FROM_CART,  SELECT_BOOK } from '../constants';

export const showDetail = (book) => ({
    type: SELECT_BOOK,
    book
});

export const addToCart = (book) => ({
    type: ADD_TO_CART,
    book
});

export const deleteFromCart = (book) => ({
    type: DELETE_FROM_CART,
    book
});