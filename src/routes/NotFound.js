import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import "stylesheets/NotFound.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "values/locals";
import urls from "values/urls";

const NotFound = () => {
    useTitle(`Page Not Found | ${locals.siteName}`);
    const history = useHistory();
    history.push(urls.notfound);

    return (
        <Container className="notfound__container">
            <Card className="text-dark notfound__card">
                <Card.Title className="text-center notfound__card__title">
                    404 Page Not Found
                </Card.Title>
                <Button
                    className="notfound__card__btn"
                    variant="outline-light"
                    onClick={() => history.push(urls.home)}
                >
                    돌아가기
                </Button>
            </Card>
        </Container>
    );
};

export default NotFound;
