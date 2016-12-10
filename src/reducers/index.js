import { combineReducers } from 'redux';
import books from './books';
import cart from './cart';
import currentBook from './currentBook';

const bookCart = combineReducers({
    books, 
    cart,
    currentBook
}); 

export default bookCart;