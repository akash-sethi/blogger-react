import {ADD_COMMENT} from "../types/action.types";
import api from '../api';

export const commentAdded = comment =>({
    type: ADD_COMMENT,
    comment
});

export const addComment = data => dispatch =>
    api.addComment(data).then(res => dispatch(commentAdded(res)));