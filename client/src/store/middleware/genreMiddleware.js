const genreMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    if (action.type === "FETCH_GENRE") {
        fetch("http://localhost:3005/api/genres")
            .then((response) => response.json())
            .then((json) => dispatch({ type: "GENRE_LIST_SUCCESS", payload: json }));
    } else if (action.type === "ADD_GENRE") {
        fetch("http://localhost:3005/api/genres", {
            method: "POST",
            body: JSON.stringify({
                name: action.payload.name
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => dispatch({ type: "NEW_GENRE", payload: json }))
            .catch(ex => {
                console.log(ex);
            });
    } else if (action.type === "EDIT_GENRE") {
        fetch("http://localhost:3005/api/genres/" + action.payload._id, {
            method: "PUT",
            body: JSON.stringify({
                name: action.payload.name
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => dispatch({ type: "UPDATE_GENRE", payload: json }))
            .catch(ex => {
                console.log(ex);
            });
    } else if (action.type === "REMOVE_POST") {
        fetch("http://localhost:3005/api/genres/" + action.payload._id, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((json) => dispatch({ type: "DELETE_GENRE", payload: { _id: action.payload._id } }))
            .catch(ex => {
                console.log(ex);
            });
    }
    next(action);
}
export default genreMiddleware;