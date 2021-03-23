import React from "react";
import urls from "urls";
import { authService } from "fbInstance";
import { Nav, Navbar } from "react-bootstrap";

const Navigator = ({auth}) => {
    const onSignOutClick = async () => {
        await authService.signOut();
        
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href={urls.home}>SoonItSoon</Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Nav className="justify-content-end">
                {
                    auth ? 
                    (
                        <>
                            <Nav.Item>
                                <Nav.Link href={urls.home} onClick={onSignOutClick}>Sign Out</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={urls.profile}>My Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={urls.editProfile}>Edit Profile</Nav.Link>
                            </Nav.Item>
                        </>
                    ) : (
                        <>
                            <Nav.Item>
                                <Nav.Link href={urls.signin}>Sign In</Nav.Link>
                            </Nav.Item>
                        </>
                    )
                }
                <Nav.Item>
                    <Nav.Link href={urls.help}>Help</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default Navigator;