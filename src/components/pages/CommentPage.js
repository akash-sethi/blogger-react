import React from "react";
import { Comment,Header } from "semantic-ui-react";
import CommentForm from "../forms/CommentForm";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {addComment} from "../../actions/comment";

class CommentPage extends React.Component{

    submit = (data) =>
        this.props.addComment({...data, id: this.props.id}).then(res => console.log(res))

    render() {
        return (
            <Comment.Group>
                <Header as='h3' dividing>
                    Comments
                </Header>

                <Comment>
                    <Comment.Content>
                        <Comment.Author as='a'>Matt</Comment.Author>
                        <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                        <Comment.Text>How artistic!</Comment.Text>
                    </Comment.Content>
                </Comment>

               <CommentForm submit={this.submit}/>
            </Comment.Group>
        )
    }
}

CommentPage.propTypes = {
   id: PropTypes.string,
   addComment: PropTypes.func.isRequired
};

export default connect(null, {addComment})(CommentPage);