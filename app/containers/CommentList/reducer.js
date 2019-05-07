import { fromJS } from 'immutable';


const initialState = fromJS({

});

export default (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        default: 
        return state;
    }
};