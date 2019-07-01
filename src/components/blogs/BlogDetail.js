import React from "react";
import PropTypes from 'prop-types';
import {Container, Header} from "semantic-ui-react";
import {getBlogDetail} from '../../actions/blogs'
import CommentPage from "../pages/CommentPage";
import {connect} from "react-redux";
import Alert from "../messages/Alert";

class BlogDetail extends React.Component {

    state = {
        blog: {},
        error: null
    };

    componentWillMount() {
       this.props.getBlogDetail(this.props.match.params.id)
           .then(() => {
               this.setState({
                   blog: this.props.blog
               })
           }).catch(e =>  console.log(e))
    }

    render() {
        const {blog, error} = this.state;
        return (
            <React.Fragment>
                {error? <Alert header={error.header}/>:''}
                <Container text style={{ marginTop: '7em' }}>
                    <Header as='h2'>{blog.title}</Header>
                    <p dangerouslySetInnerHTML={{__html: blog.description}}/>
                    <CommentPage/>
                </Container>
            </React.Fragment>

        )
    }
}

BlogDetail.propTypes = {
    getBlogDetail: PropTypes.func,
};

function mapStateToProps(state){
  return {
      blog: state.blog
  }
}

export default connect(mapStateToProps, {getBlogDetail})(BlogDetail)