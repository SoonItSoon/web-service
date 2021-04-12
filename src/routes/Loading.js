import React from "react";
import useTitle from "@unsooks/use-title";
import { Container, Spinner } from "react-bootstrap";
import "stylesheets/Loading.css";

const Loading = () => {
    useTitle(`Loading...`);
    return (
        <>
            <Container className="text-center loading__container">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </Container>
        </>
    );
};

export default Loading;
