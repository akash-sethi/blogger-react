import {BLOG_LIST} from "../types/action.types";

export const blogs = (state={}, action) => {
    switch (action.type) {
        case BLOG_LIST:
            return action.blogs;
        default:
            return [];
    }
};