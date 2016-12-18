import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  margin: '12px 0 12px 160px'
};

const Cart = ({cart, total, onDelete}) => (
  <div>
      <List>
      {
        cart && cart.length 
        ? 
          cart.map((book) => 
            <ListItem key={book.id}>
              <div>
                <h4>{book.title}</h4>
                <div>
                  <span>已选择{book.number}本</span>
                  <RaisedButton label="删除" secondary={true} style={buttonStyle} onClick={book => onDelete(book)}/>
                </div>
              </div>
            </ListItem>
          )
        :
        null
      }
    </List>
    <Divider />
    {
      total ? `合计：${total}` : ''
    }
  </div>
);

export default Cart;