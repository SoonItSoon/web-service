import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigator = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">SoonItSoon</Navbar.Brand>
                    <Nav className="mr-auto">
                </Nav>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/sign-out">Sign Out</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/profile">My Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/profile/edit">Edit Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/help">Help</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        )
    } else {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">SoonItSoon</Navbar.Brand>
                    <Nav className="mr-auto">
                </Nav>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/sign-in">Sign In</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/help">Help</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigator;