import React from 'react';
import { Container, Grid, Header } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {getBlogs} from "../../actions/blogs";
import {BlogList} from '../blogs/BlogList';

class HomePage extends React.Component{
    _willMount = false;
    state = {
        data: {
            blogs: this.props.blogs
        }
    };

    componentWillMount() {
        this._willMount = true;

        this.props.getBlogs().then(() => {
            if(this._willMount){
                this.setState({
                    data: {
                        blogs: this.props.blogs
                    }
                });
            }
        })
    }

    componentWillUnmount(){
        this._willMount = false
    }

    render() {
        const { blogs } = this.state.data;
        const bloglist = blogs.map((blog, index) => {
            if(blog.description.length > 200){
                blog.description = `${blog.description.substring(0,200)}...`
            }
            return <BlogList key={index} blog={blog}/>
        })
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Welcome! Checkout latest blogs</Header>
                <div className="ui divider"/>
                <Grid divided='vertically'>
                    {bloglist}
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
        blogs: state.blogs
    }
}

export default connect(mapStateToProps, { getBlogs })(HomePage)


