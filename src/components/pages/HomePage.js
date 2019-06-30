import React from 'react';
import { Container, Grid, Header, Item } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {getBlogs} from "../../actions/blogs";
import {BlogList} from '../blogs/BlogList';

class HomePage extends React.Component{

    state = {
        data: {
            blogs: this.props.blogs
        }
    };

    componentWillMount() {
        this.props.getBlogs().then(() => {
            this.setState({
                data: {
                    blogs: this.props.blogs
                }
            });
        })
    }

    render() {
        const { blogs } = this.state.data;
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Welcome! Checkout latest blogs</Header>
                <div className="ui divider"/>
                <Grid divided='vertically'>
                    {blogs.map((blog, index) => <BlogList key={index} blog={blog}/>)}
                </Grid>
            </Container>
        )
    }
}

HomePage.propTypes = {
    blogs: PropTypes.array,
    getBlogs: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        blogs: state.blog
    }
}

export default connect(mapStateToProps, { getBlogs })(HomePage)


