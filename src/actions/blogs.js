import {BLOG_LIST, BLOG_DETAIL} from "../types/action.types";
import api from "../api";

export const blogList = blogs => ({
    type: BLOG_LIST,
    blogs
});

export const blogDetail = blogs => ({
    type: BLOG_DETAIL,
    blogs
});

export const getBlogs = () => dispatch =>
    api.blogs().then(data => dispatch(blogList(data)));

export const getBlogDetail = (id) => api.blog(id);