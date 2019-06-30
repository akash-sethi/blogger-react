import React from "react";
import PropTypes from 'prop-types';
import {Container, Header} from "semantic-ui-react";
import {getBlogDetail} from '../../actions/blogs'
import CommentPage from "../pages/CommentPage";

class BlogDetail extends React.Component {

    state = {
        blog: {}
    };

    componentWillMount() {
       getBlogDetail(this.props.id)
           .then(blog => {
               this.setState({
                   blog: blog
               })
           })
    }


    render() {
        const {blog} = this.state;
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h2'>{blog.title}</Header>
                <p dangerouslySetInnerHTML={{__html: blog.description}}/>
                <CommentPage id={blog._id}/>
            </Container>
        )
    }
}

BlogDetail.propTypes = {
    id: PropTypes.string,
}

export default BlogDetail