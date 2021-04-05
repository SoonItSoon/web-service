import React from "react";
import useTitle from "@unsooks/use-title";
import { Container } from "react-bootstrap";
import "stylesheets/Loading.css";

const Loading = () => {
    useTitle(`Loading...`);
    return (
        <Container className="text-center loading__container">
            <span>Loading...</span>
        </Container>
    );
};

export default Loading;
