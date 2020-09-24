import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

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
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter }) //use concat bcoz return a new array
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1) //splice mutates original array
            const updatedArray = state.results.filter(result => result.id !== action.resultElId); // filter returns a new array 
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }
}

export default reducer;