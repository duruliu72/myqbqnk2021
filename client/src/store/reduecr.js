import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import genreReducer from "./genreReducer";
export default combineReducers({
    userState: userReducer,
    postState: postReducer,
    genretState: genreReducer
});