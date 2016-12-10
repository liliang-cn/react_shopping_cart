import _ from 'lodash';
import { ADD_TO_CART } from '../constants';

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
        default:
            return state;
    }
};

export default cart;