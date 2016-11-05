/**
 *
 *
 *
 * */
'use strict';
import * as types from './ActionTypes';

export function increment() {
    return{
        type:types.INCREMENT_COUNTER
    };
};

export function decrement() {
    return{
        type:types.DECREMNET_COUNTER
    };
};
export function incrementIfOdd() {
    return (dispatch,getState) =>{
        var {counter} = getState();
        if(counter%2 === 0){
            return;
        }
        dispatch(increment());
    }
};

export function incrementAsync(delay) {
    delay = delay || 1000;
    return dispatch =>{
        setTimeout(() => {
            dispatch(increment());
        },delay);
    };
}

export function decrementAsync(delay) {
    delay = delay || 1000;
    return dispatch => {
        setTimeout(() => {
            dispatch(decrement());
        },delay);
    };
}