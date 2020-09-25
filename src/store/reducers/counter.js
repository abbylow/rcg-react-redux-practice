import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0,
}

// Note: we cannot execute asynchronous code in here (need to use middleware)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            // const newState = Object.assign({}, state);
            // newState.counter = state.counter + 1;
            // return newState;
            return updateObject(state, {counter: state.counter + 1});
            // return {
            //     ...state,
            //     counter: state.counter + 1
            // }
        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});
            // return {
            //     ...state,
            //     counter: state.counter - 1
            // }
        case actionTypes.ADDITION:
            return updateObject(state, {counter: state.counter + action.value});
            // return {
            //     ...state,
            //     counter: state.counter + action.value
            // }
        case actionTypes.SUBTRACTION:
            return updateObject(state, {counter: state.counter - action.value});
            // return {
            //     ...state,
            //     counter: state.counter - action.value
            // }
        default:
            return state;
    }
}

export default reducer;