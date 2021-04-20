import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import "stylesheets/Search.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "values/locals";
import urls from "values/urls";

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
                    재난문자 검색
                </Card.Title>
                <Button
                    className="search__card__btn"
                    variant="outline-light"
                    onClick={goHome}
                >
                    돌아가기
                </Button>
            </Card>
        </Container>
    );
};

export default Search;
