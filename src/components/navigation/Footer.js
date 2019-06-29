import React from 'react'
import { Container, Divider, Image, Segment, List } from "semantic-ui-react";

const Footer = () => (
    <Segment inverted  style={{ margin: '14em 0em 0em', padding: '1em 0em' }}>
        <Container textAlign='center'>

            <Image centered size='mini' src='/logo.jpg' />
            <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='#'>
                    Site Map
                </List.Item>
                <List.Item as='a' href='#'>
                    Contact Us
                </List.Item>
                <List.Item as='a' href='#'>
                    Terms and Conditions
                </List.Item>
                <List.Item as='a' href='#'>
                    Privacy Policy
                </List.Item>
            </List>
        </Container>
    </Segment>
);

export default Footer;