const userMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    next(action);
}
export default userMiddleware;