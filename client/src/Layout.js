import React from 'react'
import {
    Container,
    Header,
    Image,
} from 'semantic-ui-react'
import TopNavigation from "./components/navigation/TopNavigation";
import Footer from "./components/navigation/Footer";

const Layout = () => (
    <div>
        <TopNavigation/>

        <Container text style={{ marginTop: '7em' }}>
            <Header as='h1'>Semantic UI React Fixed Template</Header>
            <p>This is a basic fixed menu template using fixed size containers.</p>
            <p>
                A text container is used for the main container, which is useful for single column layouts.
            </p>

            <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
            <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        </Container>

        <Footer/>
    </div>
)

export default Layout