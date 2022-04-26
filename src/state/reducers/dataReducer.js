const initialState = 0;

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "setIndex":
            return action.payload
        default:
            return state
    }
}

export default reducer;