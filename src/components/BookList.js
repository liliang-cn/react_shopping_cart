import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const BookList = ({books, onSlelect}) => (
    <List>
        <Subheader>All Books</Subheader>
        {
            books.map(book => (
                <ListItem 
                    key={book.id}
                    onClick={() => onSlelect(book)}
                >
                {book.title}
                </ListItem>
            ))
        }
    </List>          
);

export default BookList;