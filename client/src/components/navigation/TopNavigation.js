import React from "react";
import { Container, Image, Menu, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {logout} from "../../actions/user";

class TopNavigation extends React.Component {

    render() {
        const { isAuthenticated, user} = this.props;
        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as={Link} to='/' header>
                        <Image size='mini' src='/logo.jpg' style={{ marginRight: '1.5em' }} />
                        My-Blog
                    </Menu.Item>
                    {!isAuthenticated?
                        <Menu.Item position='right' as={Link} to='/login'>Login | Signup</Menu.Item>:
                        <Menu.Menu position='right'>
                            <Dropdown position='right' item simple text={user.email}>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/' onClick={this.props.logout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Menu>
                    }
                </Container>
            </Menu>
        )
    }
}

TopNavigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.email,
        user: state.user
    }
}


export default connect(mapStateToProps, {logout})(TopNavigation)
