import React from 'react';
import { Comment } from "semantic-ui-react";

export const CommentRow = ({comment}) => (
    <Comment>
        <Comment.Content>
            <Comment.Author as='a'>{comment.user}</Comment.Author>
            <Comment.Metadata>
                <div>{new Date(comment.dateCreated).toLocaleString()}</div>
            </Comment.Metadata>
            <Comment.Text>{comment.comment}</Comment.Text>
        </Comment.Content>
    </Comment>
);
