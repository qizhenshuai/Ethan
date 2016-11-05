import * as types from '../actions/ActionTypes';

const initialState = 0;

export default function counter(state = initialState,action) {

    switch (action.type){
        case types.INCREMENT_COUNTER:
            return state+1;
        case types.DECREMNET_COUNTER:
            return state-1;
        default:
            return state;
    }



}