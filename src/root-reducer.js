import { combineReducers } from "redux";
import { user } from './reducers/user-reducer';
import {blog} from "./reducers/blog-reducer";

const rootReducer = combineReducers({user, blog});

export default rootReducer;