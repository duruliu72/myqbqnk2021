import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reduecr from "./reduecr"
import postMiddleware from "./middleware/postMiddleware";
import userMiddleware from "./middleware/userMiddleware";
import genreMiddleware from "./middleware/genreMiddleware";
const middlewareEnhancer = applyMiddleware(thunk, postMiddleware, userMiddleware, genreMiddleware);
export default function () {
    return createStore(reduecr, middlewareEnhancer);
}