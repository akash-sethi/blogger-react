import React from "react";
import { Comment,Header } from "semantic-ui-react";
import CommentForm from "../forms/CommentForm";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {addComment} from "../../actions/blogs";
import {CommentRow} from "./Comment";

class CommentPage extends React.Component{

    state = {
        comments: []
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.comments !== this.state.comments){
            this.setState({comments: nextProps.comments})
        }
    }

    submit = (data) =>
        this.props.addComment({...data, id: this.props.id})

    render() {
        const {comments} = this.state;
        const rows = comments.map((comment, index) => <CommentRow key={index} comment={comment}/>)
        return (
            <Comment.Group>
                <Header as='h3' dividing>
                    Comments
                </Header>
                {rows}
               <CommentForm submit={this.submit}/>
            </Comment.Group>
        )
    }
}

CommentPage.propTypes = {
   id: PropTypes.string,
   comments: PropTypes.array,
   addComment: PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        comments: state.blog? state.blog.comments: [],
        id: state.blog? state.blog._id: null
    }
}

export default connect(mapStateToProps, {addComment})(CommentPage);