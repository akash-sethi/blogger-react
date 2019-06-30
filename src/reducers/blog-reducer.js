import {BLOG_LIST} from "../types/action.types";

export const blog = (state={}, action) => {
    switch (action.type) {
        case BLOG_LIST:
            return action.blogs;
        default:
            return [];
    }
};