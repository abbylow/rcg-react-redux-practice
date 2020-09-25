import actionReducerMap from './reducerMap';

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    const { type } = action;
    if(actionReducerMap[type]) {
        return actionReducerMap[type](state, action);
    }
    return state;
};

export default reducer;