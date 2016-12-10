import React from 'react';
import { connect } from 'react-redux';

import BookList from '../components/BookList';
import BookDetail from '../components/BookDetail';
import Cart from '../components/Cart';

import { showDetail, addToCart } from '../actions';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

const style = {
  height: 600,
  width: 360,
  margin: '20px 40px',
  textAlign: 'center',
  display: 'inline-block',
};

const BooksCart = ({dispatch, books, currentBook, cart, total}) => (
    <MuiThemeProvider>
        <div>
            <AppBar showMenuIconButton={false} title='Shopping-Cart' />
            <Paper style={style} zDepth={5}>
                <BookList books={books} onSlelect={book => dispatch(showDetail(book))} />
            </Paper>
            <Paper style={style} zDepth={5}>
                <BookDetail currentBook={currentBook} onAddToCart={book => dispatch(addToCart(book))} />
            </Paper>
            <Paper style={style} zDepth={5}>
                <Cart cart={cart} total={total}/>
            </Paper>
        </div>
    </MuiThemeProvider>  
);

const total = books => books && books.length ? books.map(book => book.price * book.number).reduce((prev, cur) => prev + cur) : null

const mapStateToProps = (state, ownProps) => (
    {
        books: state.books,
        currentBook: state.currentBook,
        cart: state.cart,
        total: total(state.cart)
    }
);

export default connect(mapStateToProps, null)(BooksCart);
