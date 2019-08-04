import {BLOG_LIST, BLOG_DETAIL} from "../types/action.types";
import api from "../api";

export const blogList = blogs => ({
    type: BLOG_LIST,
    blogs
});

export const blogDetail = blog => ({
    type: BLOG_DETAIL,
    blog
});

export const getBlogs = () => dispatch =>
    api.blogs().then(data => dispatch(blogList(data)));

 export const getBlogDetail = (id) =>  dispatch =>
    api.blog(id).then(blog => dispatch(blogDetail(blog)));

export const addComment = data => dispatch =>
    api.addComment(data).then(blog => dispatch(blogDetail(blog)));