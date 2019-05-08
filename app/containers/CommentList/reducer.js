import { fromJS } from 'immutable';

import { UPDATE_COMMENT } from './constants';

const initialState = fromJS({
    comment: 'Nelson H from store'
});

export default (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case UPDATE_COMMENT:
            return state.set('comment', action.comment);
        default: 
            return state;
    }
};