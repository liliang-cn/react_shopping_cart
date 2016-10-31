import React from 'react';

const Car = ({car, total}) => {
  let result = car.length ? <p>合计: {total}</p>: '';
  return (
    <div className='col-md-6'>
      <h2>购物车</h2>
      <ul>
        {
          car.map((book, index) => {
            return <li key={index}>
              {book.title} 价格为: {book.price} 已选择{book.number}本
            </li>
          })
        }
      </ul>
      {result}
    </div>
  );
};

export default Car;