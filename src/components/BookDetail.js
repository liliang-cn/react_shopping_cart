import React from 'react';
import Subheader from 'material-ui/Subheader';

const Bookdetail = ({currentBook, onAddToCart}) => (
  currentBook ? 
    <div>
      <Subheader>图书详情</Subheader>
      <h3>{currentBook.title}</h3>
      <p>作者:{currentBook.author}</p>
      <p>价格:{currentBook.price}</p>
      <p>编号:{currentBook.id}</p>
      <button
        onClick={() => onAddToCart(currentBook)}>
        放进购物车
      </button>
    </div>
  :
  <div>
    <Subheader>请选择图书</Subheader>
  </div>
);

export default Bookdetail;