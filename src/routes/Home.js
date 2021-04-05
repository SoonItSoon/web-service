import React from "react";
import useTitle from "@unsooks/use-title";
import locals from "locals";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import "stylesheets/Home.css";
import { useHistory } from "react-router-dom";
import urls from "urls";

const Home = () => {
    useTitle(`Home | ${locals.siteName}`);
    document.body.style.background = "var(--main-bg-dark-more)";
    return (
        <Container className="container home__container">
            <header className="home__header">Home</header>
            <ButtonGroup className="home__btnGroup">
                <Button className="home__btn">개인 동선</Button>
                <Button className="home__btn">관심분야 정보</Button>
                <Button className="home__btn">재난문자 검색</Button>
            </ButtonGroup>
        </Container>
    );
};

export default Home;
