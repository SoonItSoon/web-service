import React from "react";
import useTitle from "@unsooks/use-title";
import locals from "locals";
import {
    Container,
    Button,
    Card,
    Jumbotron,
    Carousel,
    Image,
} from "react-bootstrap";
import "stylesheets/Home.css";
import urls from "urls";
import { useHistory } from "react-router";
import logo from "assets/soonitsoon_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarAlt,
    faExclamationTriangle,
    faMapMarkedAlt,
    faSearch,
    faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Home = ({ auth }) => {
    useTitle(`Home | ${locals.siteName}`);
    const history = useHistory();
    const goSignIn = () => {
        history.push(urls.signin);
    };
    const goBriefing = () => {
        history.push(urls.briefing);
    };
    const goInterest = () => {
        history.push(urls.interest);
    };
    const goCheckSafety = () => {
        history.push(urls.safety);
    };
    const goTimeline = () => {
        history.push(urls.timeline);
    };
    const goSearch = () => {
        history.push(urls.search);
    };

    const menuObj = [
        {
            id: 0,
            title: "일일 브리핑 정보",
            desc: "오늘 하루 재난 정보를 한눈에",
            icon: faCalendarAlt,
            onClick: goBriefing,
        },
        {
            id: 1,
            title: "관심분야 정보",
            desc: "맞춤형 재난 정보 제공",
            icon: faUserCircle,
            onClick: goInterest,
        },
        {
            id: 2,
            title: "위험 동선 확인",
            desc: "보건소 방문 요청 확인",
            icon: faExclamationTriangle,
            onClick: goCheckSafety,
        },
        {
            id: 3,
            title: "개인 동선",
            desc: "날짜별 나의 동선 확인",
            icon: faMapMarkedAlt,
            onClick: goTimeline,
        },
        {
            id: 4,
            title: "재난문자 검색",
            desc: "키워드별 재난문자 검색",
            icon: faSearch,
            onClick: goSearch,
        },
    ];

    return (
        <Container className="container home__container">
            <Jumbotron className="home__jumbotron">
                <Image
                    className="home__jumbotron__img"
                    src={logo}
                    width="50%"
                    alt="SoonItSoon_Logo"
                    fluid
                />
                <p className="home__jumbotron__desc">
                    사용자 맟춤형 재난 정보 제공 서비스
                </p>
            </Jumbotron>
            <Card className="text-dark home__card">
                {auth ? (
                    <Carousel className="home__carousel">
                        <Carousel.Item className="home__carousel__item">
                            <div className="home__carousel__btn-div">
                                <Button
                                    className="home__carousel__btn"
                                    onClick={goBriefing}
                                >
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                </Button>
                            </div>
                            <Carousel.Caption className="home__carousel__caption">
                                <h3>일일 브리핑 정보</h3>
                                <p>오늘 하루 재난 정보를 한눈에</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="home__carousel__item">
                            <div className="home__carousel__btn-div">
                                <Button
                                    className="home__carousel__btn"
                                    onClick={goInterest}
                                >
                                    <FontAwesomeIcon icon={faUserCircle} />
                                </Button>
                            </div>
                            <Carousel.Caption className="home__carousel__caption">
                                <h3>관심분야 정보</h3>
                                <p>맞춤형 재난 정보 제공</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="home__carousel__item">
                            <div className="home__carousel__btn-div">
                                <Button
                                    className="home__carousel__btn"
                                    onClick={goCheckSafety}
                                >
                                    <FontAwesomeIcon
                                        icon={faExclamationTriangle}
                                    />
                                </Button>
                            </div>
                            <Carousel.Caption className="home__carousel__caption">
                                <h3>위험 동선 확인</h3>
                                <p>보건소 방문 요청 확인</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="home__carousel__item">
                            <div className="home__carousel__btn-div">
                                <Button
                                    className="home__carousel__btn"
                                    onClick={goTimeline}
                                >
                                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                                </Button>
                            </div>
                            <Carousel.Caption className="home__carousel__caption">
                                <h3>개인 동선</h3>
                                <p>날짜별 나의 동선 확인</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="home__carousel__btn-div">
                                <Button
                                    className="home__carousel__btn"
                                    onClick={goSearch}
                                >
                                    <FontAwesomeIcon icon={faSearch} />
                                </Button>
                            </div>
                            <Carousel.Caption className="home__carousel__caption">
                                <h3>재난문자 검색</h3>
                                <p>키워드별 재난문자 검색</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
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
