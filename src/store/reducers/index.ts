import {combineReducers} from "redux";
import UserReducer from "./UserReducer.ts";

const reducer = combineReducers({
    user: UserReducer
});

export default reducer;
