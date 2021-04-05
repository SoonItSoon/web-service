import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import "stylesheets/Search.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "locals";
import urls from "urls";

const Search = () => {
    useTitle(`Search | ${locals.siteName}`);
    const history = useHistory();
    const goHome = () => {
        history.push(urls.home);
    };

    return (
        <Container className="search__container">
            <Card className="text-dark search__card">
                <Card.Title className="text-center search__card__title">
                    Search
                </Card.Title>
                <Button
                    className="search__card__btn"
                    variant="outline-light"
                    onClick={goHome}
                >
                    Go Back Home
                </Button>
            </Card>
        </Container>
    );
};

export default Search;
