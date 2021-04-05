import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import "stylesheets/Interest.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "locals";
import urls from "urls";

const Interest = () => {
    useTitle(`Interest | ${locals.siteName}`);
    const history = useHistory();
    const goHome = () => {
        history.push(urls.home);
    };

    return (
        <Container className="interest__container">
            <Card className="text-dark interest__card">
                <Card.Title className="text-center interest__card__title">
                    Interest
                </Card.Title>
                <Button
                    className="interest__card__btn"
                    variant="outline-light"
                    onClick={goHome}
                >
                    Go Back Home
                </Button>
            </Card>
        </Container>
    );
};

export default Interest;
