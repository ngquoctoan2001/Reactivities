import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu intverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reactivities
                </Menu.Item>

                <Menu.Item name='Activities' />
                <Menu.Item>
                    <Button positive content='Create Activity' className='ui button'>Create Activity</Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}