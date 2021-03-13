
const initialUserState = {
    users: []
}
const userReducer = function (state = initialUserState, action) {
    switch (action.type) {
        case 'USER_LIST_SUCCESS':
            return Object.assign({}, state, { users: action.payload });
    }
    return state;
}
export default userReducer;