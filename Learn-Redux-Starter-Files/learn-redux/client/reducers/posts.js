export default posts = (state = [], action) => {
    console.log(state, action);
    switch (action.type) {
        case "INCREMENT_LIKES":
            const i = action.index
            return [
                ...slice(0, i), // all of the posts before
                { ...state[i], likes: state[i].likes++ },
                ...slice(i + 1) // all of the posts after
            ]
        default:
            return state;
    }
}