import { combineReducers } from "redux";
import { user } from './reducers/user-reducer';
import {blogs} from "./reducers/blog-list-reducer";
import {blog} from "./reducers/blog-reducer";

const rootReducer = combineReducers({user, blogs, blog});

export default rootReducer;