import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
    return { type: actionTypes.STORE_RESULT, result };
};

// use setTimeout to simulate the asynchronous behaviour
export const storeResult = (result) => {
    // return a function, dispatch argument is provided by redux-thunk
    // middleware blocks the old action and dispatch the action again
    return function (dispatch, getState) {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter; //can get the state from redux, but dont overuse it, instead can pass the needed variables from action creator
            // console.log(oldCounter);
            dispatch(saveResult(result))
        }, 2000);
    }
};

export const deleteResult = (resultElId) => {
    return { type: actionTypes.DELETE_RESULT, resultElId };
};
