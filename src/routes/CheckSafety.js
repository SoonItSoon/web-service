import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import "stylesheets/CheckSafety.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "values/locals";
import urls from "values/urls";

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
                    위험 동선 확인
                </Card.Title>
                <Button
                    className="checkSafety__card__btn"
                    variant="outline-light"
                    onClick={goHome}
                >
                    돌아가기
                </Button>
            </Card>
        </Container>
    );
};

export default CheckSafety;
