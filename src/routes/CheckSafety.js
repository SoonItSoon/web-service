import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import "stylesheets/CheckSafety.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "locals";
import urls from "urls";

const CheckSafety = () => {
    useTitle(`CheckSafety | ${locals.siteName}`);
    const history = useHistory();
    const goHome = () => {
        history.push(urls.home);
    };

    return (
        <Container className="checkSafety__container">
            <Card className="text-dark checkSafety__card">
                <Card.Title className="text-center checkSafety__card__title">
                    CheckSafety
                </Card.Title>
                <Button
                    className="checkSafety__card__btn"
                    variant="outline-light"
                    onClick={goHome}
                >
                    Go Back Home
                </Button>
            </Card>
        </Container>
    );
};

export default CheckSafety;
