export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDITION = 'ADDITION';
export const SUBTRACTION = 'SUBTRACTION';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return { type: INCREMENT };
};

export const decrement = () => {
    return { type: DECREMENT };
};

export const addition = (value) => {
    return { type: ADDITION, value };
};

export const subtraction = (value) => {
    return { type: SUBTRACTION, value };
};

export const storeResult = (result) => {
    return { type: STORE_RESULT, result };
};

export const deleteResult = (resultElId) => {
    return { type: DELETE_RESULT, resultElId };
};