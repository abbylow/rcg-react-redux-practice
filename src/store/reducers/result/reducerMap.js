import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

const storeResultReducer = (state, action) => {
    return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result }) });
}

const deleteResultReducer = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId); // filter returns a new array 
    return updateObject(state, { results: updatedArray });
}

const actionReducerMap = {
    [actionTypes.STORE_RESULT]: storeResultReducer,
    [actionTypes.DELETE_RESULT]: deleteResultReducer
}

export default actionReducerMap;
