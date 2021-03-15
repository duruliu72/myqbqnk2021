// function nextId(list) {
//     const maxId = list.reduce((maxId, item) => Math.max(item.id, maxId), -1);
//     return maxId + 1;
// }
const initialUserState = {
    genres: [],
}
var genreReducer = function (state = initialUserState, action) {
    switch (action.type) {
        case "NEW_GENRE":
            return {
                ...state,
                genres: [{
                    // id: nextId(state.genres),
                    ...action.payload
                }, ...state.genres]
            };
        case "UPDATE_GENRE":
            return {
                ...state,
                genres: [...state.genres].map((item) => {
                    if (item._id !== action.payload._id) {
                        return item;
                    } else {
                        return {
                            ...item,
                            name: action.payload.name
                        }
                    }
                })
            }
        case "DELETE_GENRE":
            return {
                ...state,
                genres: [...state.genres].filter((item) => {
                    if (item._id !== action.payload._id) {
                        return true;
                    }
                    return false;
                })
            }
        case 'GENRE_LIST_SUCCESS':
            return Object.assign({}, state, { genres: action.payload });
    }
    return state;
}
export default genreReducer;
export const getGenres = (state) => {
    return state.genretState.genres;
}
