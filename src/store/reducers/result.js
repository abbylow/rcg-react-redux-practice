import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result }) });
        // return {
        //     ...state,
        //     results: state.results.concat({ id: new Date(), value: action.result }) //use concat bcoz return a new array
        // }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1) //splice mutates original array
            const updatedArray = state.results.filter(result => result.id !== action.resultElId); // filter returns a new array 
            // return {
            //     ...state,
            //     results: updatedArray
            // }
            return updateObject(state, {results: updatedArray});
        default:
            return state;
    }
}

export default reducer;