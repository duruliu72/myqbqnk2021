const postMiddleware = ({ dispatch, getState }) => (next) => (action) => {

    next(action);
}
export default postMiddleware;