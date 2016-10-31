import React, { Component } from 'react';

import BookList from './BookList';
import BookDetail from './BookDetail';
import Car from './Car';

class Books extends Component {
  constructor() {
    super()
    this.handleListClick = this.handleListClick.bind(this);
    this.handleAddToCar = this.handleAddToCar.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.state = {
      currentBook: null,
      car: [],
      total: 0
    };
  }

  handleListClick(book) {
    this.setState({
      currentBook: book
    });
  }

  handleAddToCar(currentBook) {
    this.getTotal();
    let number = 1;
    let exist = false;
    if (this.state.car) {
      this.state.car.forEach(book => {
        if (book.id === currentBook.id) {
          book.number += 1;
          exist = true;
          this.setState({});
        }
      });
    }
    
    if (!exist) {
      let selectedBook = Object.assign({}, currentBook, {number});
      this.setState({
          car: this.state.car.concat(selectedBook)
      });
    }
  }

  getTotal() {
    let car = this.state.car;
    let total = 0;
    if (car.length) {
      total = car.map(book => (book.price * book.number)).reduce((prev, cur) => (prev + cur));
      this.setState({total});
    }
  }

  render() {
    return (
      <div className='row'>
        <BookList books={this.props.books} listClick={this.handleListClick}/>
        <BookDetail currentBook={this.state.currentBook} addToCar={this.handleAddToCar} />
        <Car {...this.state} />
      </div>
    );
  }
}

Books.defaultProps = {
    books: [
    {
      id: 1,
      category: 'CSS',
      title: 'CSS权威指南',
      author: 'Eric A. Meyer',
      price: 42
    },
    {
      id: 2,
      category: 'JS',
      title: 'JavaScript高级程序设计',
      author: 'Nicholas C.Zakas',
      price: 69
    },
    {
      id: 3,
      category: 'CSS',
      title: '精通CSS:高级Web标准解决方案',
      author: '巴德,科利森,莫尔',
      price: 25
    }
  ]
};

export default Books;