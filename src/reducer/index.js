import data from "./../data/gif"

const initialState = {
    gifs: data,
    loading: false,
    error: "This is an error",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return (state);
    }
}

export default reducer;