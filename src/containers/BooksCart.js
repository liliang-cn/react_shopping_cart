import React from 'react';
import { connect } from 'react-redux';

import BookList from '../components/BookList';
import BookDetail from '../components/BookDetail';
import Cart from '../components/Cart';

import { showDetail, addToCart, selectIndex, deleteFromCart } from '../actions';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Paper from 'material-ui/Paper';

const nearbyIcon = <IconLocationOn />;

const paperStyle = {
  minHeight: 600,
  maxWidth: 360,
  margin: '20px auto'
};

const BooksCart = ({dispatch, books, currentBook, cart, total, selectedIndex}) => {
    const renderComponent = (selectedIndex) =>{
        // 此处是按钮导航需要一个selectedIndex来确定当前哪个被选中，然后根据哪个被选中来确定渲染哪个组件
        switch (selectedIndex) {
            case 1:
                return (
                    <BookDetail currentBook={currentBook} onAddToCart={book => {
                        dispatch(addToCart(book));
                        dispatch(selectIndex(2));
                    }} />
                )
            case 2: 
                return (
                    <Cart cart={cart} total={total} onDelete={book => dispatch(deleteFromCart(book))} />
                )
            case 0:
            default:
                return (
                    <BookList books={books} onSlelect={book => {
                        dispatch(showDetail(book));
                        dispatch(selectIndex(1));
                    }} />
                )
        }
    }
    return (
        <MuiThemeProvider>
            <div>
                <AppBar showMenuIconButton={false} title='React Shopping Cart' />
                <Paper style={paperStyle} zDepth={5}>
                    <BottomNavigation selectedIndex={selectedIndex}>
                        <BottomNavigationItem label="所有图书" icon={nearbyIcon} onTouchTap={() => dispatch(selectIndex(0))}/> 
                        <BottomNavigationItem label="详情" icon={nearbyIcon} onTouchTap={() => dispatch(selectIndex(1))}/>
                        <BottomNavigationItem label="购物车" icon={nearbyIcon} onTouchTap={() => dispatch(selectIndex(2))}/>  
                    </BottomNavigation>
                    {renderComponent(selectedIndex)}
                </Paper>
            </div>
        </MuiThemeProvider>  
    )
};

// 使用递归计算购物车中的总价
const total = books => books && books.length ? books.map(book => book.price * book.number).reduce((prev, cur) => prev + cur) : null

const mapStateToProps = (state, ownProps) => (
    {
        books: state.books,
        currentBook: state.currentBook,
        cart: state.cart,
        total: total(state.cart),
        selectedIndex: state.selectIndex
    }
);

export default connect(mapStateToProps, null)(BooksCart);
