import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import "stylesheets/Briefing.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "values/locals";
import urls from "values/urls";

const Briefing = () => {
    useTitle(`Briefing | ${locals.siteName}`);
    const history = useHistory();
    const goHome = () => {
        history.push(urls.home);
    };

    return (
        <Container className="briefing__container">
            <Card className="text-dark briefing__card">
                <Card.Title className="text-center briefing__card__title">
                    일일 브리핑 정보
                </Card.Title>
                <Button
                    className="briefing__card__btn"
                    variant="outline-light"
                    onClick={goHome}
                >
                    돌아가기
                </Button>
            </Card>
        </Container>
    );
};

export default Briefing;
