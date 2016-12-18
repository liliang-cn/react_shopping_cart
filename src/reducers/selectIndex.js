import { SELECT_INDEX } from '../constants';

const selectIndex = (state=0, action) => {
    switch (action.type) {
        case SELECT_INDEX:
            return action.index
        default:
            return state;
    }
};

export default selectIndex;