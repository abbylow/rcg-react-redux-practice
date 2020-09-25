import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

const incrementReducer = (state, action ) => {
    return updateObject(state, {counter: state.counter + 1});
}

const decrementReducer = (state, action ) => {
    return updateObject(state, {counter: state.counter - 1});
}

const additionReducer = (state, action ) => {
    return updateObject(state, {counter: state.counter + action.value});
}

const subtractionReducer = (state, action ) => {
    return updateObject(state, {counter: state.counter - action.value});
}

const actionReducerMap = {
    [actionTypes.INCREMENT]: incrementReducer,
    [actionTypes.DECREMENT]: decrementReducer,
    [actionTypes.ADDITION]: additionReducer,
    [actionTypes.SUBTRACTION]: subtractionReducer,
}

export default actionReducerMap;
