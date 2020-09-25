import * as actionTypes from '../actions/actions';

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
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADDITION:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACTION:
            return {
                ...state,
                counter: state.counter - action.value
            }
        default:
            return state;
    }
}

export default reducer;