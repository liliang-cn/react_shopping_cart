import React from 'react';

import {List, ListItem} from 'material-ui/List';

const BookList = ({books, onSlelect}) => (
    <List>
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