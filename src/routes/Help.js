import React from "react";
import useTitle from "@unsooks/use-title";
import locals from "locals";
import { Container } from "react-bootstrap";
import "stylesheets/Help.css";

const Help = () => {
    useTitle(`Help | ${locals.siteName}`);
    return (
        <Container className="container help__container">
            <h1>Help</h1>
        </Container>
    );
};

export default Help;
