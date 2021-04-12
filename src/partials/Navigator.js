import React from "react";
import urls from "urls";
import { Nav, Navbar } from "react-bootstrap";

const Navigator = ({ auth, userObj, signOut, titleOnly }) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href={urls.home}>SoonItSoon</Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            {!titleOnly && (
                <Nav className="justify-content-end">
                    {auth ? (
                        <>
                            <Nav.Item>
                                <Nav.Link href="#">
                                    {userObj.displayName}
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={urls.home} onClick={signOut}>
                                    Sign Out
                                </Nav.Link>
                            </Nav.Item>
                        </>
                    ) : (
                        <>
                            <Nav.Item>
                                <Nav.Link href={urls.signin}>Sign In</Nav.Link>
                            </Nav.Item>
                        </>
                    )}
                    <Nav.Item>
                        <Nav.Link href={urls.help}>Help</Nav.Link>
                    </Nav.Item>
                </Nav>
            )}
        </Navbar>
    );
};

export default Navigator;
