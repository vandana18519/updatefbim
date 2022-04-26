export const setIndex = (index) => {
    console.log("index",index);
    return (dispatch) => {
        dispatch({
            type: "setIndex",
            payload: index
        });
    }
}
