import React from "react";
import { Container, Image, Menu, Dropdown } from "semantic-ui-react";

class TopNavigation extends React.Component {

    render() {
        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header>
                        <Image size='mini' src='/logo.jpg' style={{ marginRight: '1.5em' }} />
                        My-Blog
                    </Menu.Item>
                    <Menu.Item as='a'>Home</Menu.Item>

                    <Dropdown item simple text='Account'>
                        <Dropdown.Menu>
                            <Dropdown.Item>My Profile</Dropdown.Item>
                            <Dropdown.Item>Login</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Menu>
        )
    }
}

export default TopNavigation;
