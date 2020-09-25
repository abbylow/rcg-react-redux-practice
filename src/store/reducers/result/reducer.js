import actionReducerMap from './reducerMap';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    const { type } = action;
    if(actionReducerMap[type]) {
        return actionReducerMap[type](state, action);
    }
    return state;
};

export default reducer;