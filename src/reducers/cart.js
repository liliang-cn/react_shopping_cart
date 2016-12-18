import _ from 'lodash';
import { ADD_TO_CART, DELETE_FROM_CART } from '../constants';

const deleteBook = (arr, obj) => {
    let deleteIndex = null;
    for(let i=0;i<arr.length;i++) {
        if (arr[i].id === obj.id) {
            deleteIndex = i;
        }
    }
    return [
        ...arr.slice(0, deleteIndex),
        ...arr.slice(deleteIndex+1)
    ]
};

const cart = (state=[], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return _.find(state, action.book) 
                ?
                state.map(book => book.id === action.book.id 
                    ? 
                    Object.assign({}, book, {
                        number: ++(book.number)
                    }) 
                    : 
                    book)
                : 
                [
                    ...state,
                    Object.assign({}, action.book, {
                        number: 1
                    })
                ]
        case DELETE_FROM_CART:
            return deleteBook(state, action.book)
        default:
            return state;
    }
};

export default cart;