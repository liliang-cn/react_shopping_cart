import { combineReducers } from 'redux';
import books from './books';
import cart from './cart';
import currentBook from './currentBook';
import selectIndex from './selectIndex';

const bookCart = combineReducers({
    books, 
    cart,
    currentBook,
    selectIndex
}); 

export default bookCart;