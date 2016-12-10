import React from 'react';

const Cart = ({cart, total}) => (
  <div>
      <ul>
      {
        cart && cart.length 
        ? 
          cart.map((book, index) => <li key={index}>
            {book.title} 价格为: {book.price} 已选择{book.number}本
          </li>)
        :
        null
      }
    </ul>
    {
      total ? `合计：${total}` : ''
    }
  </div>
);

export default Cart;