import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Bookdetail = ({currentBook, onAddToCart}) => (
  currentBook ? 
    <Card>
      <CardHeader
        title={currentBook.title}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <p>作者:{currentBook.author}</p>
        <p>价格:{currentBook.price}</p>
        <p>编号:{currentBook.id}</p>
      </CardText>
      <CardActions>
        <FlatButton label="放进购物车" onTouchTap={() => onAddToCart(currentBook)}/>
      </CardActions>
    </Card>
  :
  <div>
    <Subheader>请选择图书</Subheader>
  </div>
);

export default Bookdetail;