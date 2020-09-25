import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
    return { type: actionTypes.STORE_RESULT, result };
};

// use setTimeout to simulate the asynchronous behaviour
export const storeResult = (result) => {
    // return a function, dispatch argument is provided by redux-thunk
    // middleware blocks the old action and dispatch the action again
    return function (dispatch) {
        setTimeout(() => {
            dispatch(saveResult(result))
        }, 2000);
    }
};

export const deleteResult = (resultElId) => {
    return { type: actionTypes.DELETE_RESULT, resultElId };
};
