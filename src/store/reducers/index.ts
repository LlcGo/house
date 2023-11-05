import {combineReducers} from "redux";
import UserReducer from "./UserReducer.ts";
import BookReducer from "./BookReducer.ts";

const reducer = combineReducers({
    user: UserReducer,
    book: BookReducer
});

export default reducer;
