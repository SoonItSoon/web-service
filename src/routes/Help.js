import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import "stylesheets/Help.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "locals";
import urls from "urls";

const Help = () => {
    useTitle(`Help | ${locals.siteName}`);
    const history = useHistory();
    const goHome = () => {
        history.push(urls.home);
    };

    return (
        <Container className="help__container">
            <Card className="text-dark help__card">
                <Card.Title className="text-center help__card__title">
                    Help
                </Card.Title>
                <Button
                    className="help__card__btn"
                    variant="outline-light"
                    onClick={goHome}
                >
                    Go Back Home
                </Button>
            </Card>
        </Container>
    );
};

export default Help;
