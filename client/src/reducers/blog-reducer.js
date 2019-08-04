import {BLOG_DETAIL } from "../types/action.types";

export const blog = (state={}, action) => {
    switch (action.type) {
        case BLOG_DETAIL:
            return action.blog;
        default:
            return {};
    }
};