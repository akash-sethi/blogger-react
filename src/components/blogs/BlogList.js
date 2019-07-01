import React from 'react';
import {Grid, Item} from "semantic-ui-react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const extra = {'marginLeft': '.5em', color: 'rgba(0,0,0,.4)',
    'fontSize': '.875em'};

export const BlogList = ({blog}) => (
    <Grid.Row>
        <Grid.Column>
            <Item.Content>
                <Item.Header as={Link} to={`/blog/${blog._id}`}>{blog.title}</Item.Header>
                <Item.Description dangerouslySetInnerHTML={{__html: blog.description}}/>
                <Item.Extra><span style={{
                    fontSize: '1em',
                    color: 'rgba(0,0,0,.87)',
                    fontWeight: '700'
                }}>{blog.author}</span><span style={extra}>published on: {blog.dateCreated}</span></Item.Extra>
            </Item.Content>
        </Grid.Column>
    </Grid.Row>
);

BlogList.propTypes = {
    blog: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string,
        description: PropTypes.string,
        author: PropTypes.string,
        dateCreated: PropTypes.string
    }).isRequired
};
