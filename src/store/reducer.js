const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADDITION':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBTRACTION':
            return {
                ...state,
                counter: state.counter - action.value
            }
        default:
            return state;
    }
}

export default reducer;