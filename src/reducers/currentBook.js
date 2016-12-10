import { SELECT_BOOK } from '../constants';

const currentBook = (state=null, action) => {
    switch (action.type) {
        case SELECT_BOOK:
            return action.book
        default:
            return state;
    }
};

export default currentBook;