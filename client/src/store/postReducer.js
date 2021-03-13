
function nextId(posts) {
    const maxId = posts.reduce((maxId, post) => Math.max(post.id, maxId), -1);
    return maxId + 1;
}

const initialUserState = {
    posts: []
}
const postReducer = function (state = initialUserState, action) {
    switch (action.type) {
        case "NEW_POST":
            return {
                ...state,
                posts: [{
                    id: nextId(state.posts),
                    title: action.payload.title,
                    body: action.payload.body,
                    userId: action.payload.userId
                }, ...state.posts]
            };
        case 'POST_LIST_SUCCESS':
            return Object.assign({}, state, { posts: action.payload });
    }
    return state;
}

export default postReducer;
export const getPosts = (state) => {
    return state.postState.posts;
}
