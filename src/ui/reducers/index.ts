import { combineReducers } from "redux";
import { userReducer } from '../reducers/addUserReducer'
import { commentReducer } from "./commentReducer";
import { newPostReducer } from "./newPostReducer";
import { postReducer } from "./postReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    newPost: newPostReducer,
    comment: commentReducer
})

export type RootState = ReturnType<typeof rootReducer>;