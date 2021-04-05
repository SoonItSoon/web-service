import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import "stylesheets/Timeline.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "locals";
import urls from "urls";

const Timeline = () => {
    useTitle(`Timeline | ${locals.siteName}`);
    const history = useHistory();
    const goHome = () => {
        history.push(urls.home);
    };

    return (
        <Container className="timeline__container">
            <Card className="text-dark timeline__card">
                <Card.Title className="text-center timeline__card__title">
                    Timeline
                </Card.Title>
                <Button
                    className="timeline__card__btn"
                    variant="outline-light"
                    onClick={goHome}
                >
                    Go Back Home
                </Button>
            </Card>
        </Container>
    );
};

export default Timeline;
