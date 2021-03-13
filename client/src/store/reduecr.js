import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import widgetReducer from "./widgetReducer";
export default combineReducers({
    userState: userReducer,
    postState: postReducer,
    widgetState: widgetReducer
});