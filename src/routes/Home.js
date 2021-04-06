import React from "react";
import useTitle from "@unsooks/use-title";
import locals from "locals";
import { Container, Button, ButtonGroup, Card } from "react-bootstrap";
import "stylesheets/Home.css";
import urls from "urls";
import { useHistory } from "react-router";

const Home = ({ auth }) => {
    useTitle(`Home | ${locals.siteName}`);
    const history = useHistory();
    const goTimeline = () => {
        history.push(urls.timeline);
    };
    const goInterest = () => {
        history.push(urls.interest);
    };
    const goSearch = () => {
        history.push(urls.search);
    };
    const goSignIn = () => {
        history.push(urls.signin);
    };
    return (
        <Container className="container home__container">
            <Card className="text-dark home__card">
                <Card.Title className="text-center home__card__title">
                    Home
                </Card.Title>
                {auth ? (
                    <ButtonGroup className="home__card__btnGroup">
                        <Button
                            className="home__card__btn"
                            variant="outline-light"
                            onClick={goTimeline}
                        >
                            개인 동선
                        </Button>
                        <Button
                            className="home__card__btn"
                            variant="outline-light"
                            onClick={goInterest}
                        >
                            관심분야 정보
                        </Button>
                        <Button
                            className="home__card__btn"
                            variant="outline-light"
                            onClick={goSearch}
                        >
                            재난문자 검색
                        </Button>
                    </ButtonGroup>
                ) : (
                    <div className="home__card__div">
                        <Button
                            className="home__card__btn-signin"
                            variant="outline-light"
                            onClick={goSignIn}
                        >
                            Please Sign In
                        </Button>
                    </div>
                )}
            </Card>
        </Container>
    );
};

export default Home;
