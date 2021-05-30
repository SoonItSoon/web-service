import React, { useState } from "react";
import { Container, Button, Card, ButtonGroup } from "react-bootstrap";
import "stylesheets/Help.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "values/locals";
import urls from "values/urls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarAlt,
    faExclamationTriangle,
    faMapMarkedAlt,
    faSearch,
    faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Help = () => {
    useTitle(`Help | ${locals.siteName}`);
    const history = useHistory();

    const [menu, setMenu] = useState(0);
    const menuContents = [
        {
            title: "일일 브리핑 정보",
            body: "일일 브리핑 정보 설명",
            url: urls.briefing,
        },
        {
            title: "관심분야 정보",
            body: "관심분야 정보 설명",
            url: urls.interest,
        },
        {
            title: "위험 동선 확인",
            body: "위험 동선 확인 설명",
            url: urls.safety,
        },
        {
            title: "개인 동선 확인",
            body: "개인 동선 확인 설명",
            url: urls.timeline,
        },
        {
            title: "재난문자 검색",
            body: "재난문자 검색 설명",
            url: urls.search,
        },
    ];

    return (
        <Container className="help__container">
            <Card className="text-dark help__card">
                <Card.Title className="text-center help__card__title">
                    도움말
                </Card.Title>
                <Card.Body>
                    <ButtonGroup
                        className="help__Btn__Group"
                        aria-label="help_label_group"
                    >
                        <Button
                            className={`${menu === 1 && "active"}`}
                            onClick={() => setMenu(1)}
                        >
                            <FontAwesomeIcon size="4x" icon={faCalendarAlt} />
                            <span>일일 브리핑 정보</span>
                        </Button>
                        <Button
                            className={`${menu === 2 && "active"}`}
                            onClick={() => setMenu(2)}
                        >
                            <FontAwesomeIcon size="4x" icon={faUserCircle} />
                            <span>관심분야 정보</span>
                        </Button>
                        <Button
                            className={`${menu === 3 && "active"}`}
                            onClick={() => setMenu(3)}
                        >
                            <FontAwesomeIcon
                                size="4x"
                                icon={faExclamationTriangle}
                            />
                            <span>위험 동선 확인</span>
                        </Button>
                        <Button
                            className={`${menu === 4 && "active"}`}
                            onClick={() => setMenu(4)}
                        >
                            <FontAwesomeIcon size="4x" icon={faMapMarkedAlt} />
                            <span>개인 동선 확인</span>
                        </Button>
                        <Button
                            className={`${menu === 5 && "active"}`}
                            onClick={() => setMenu(5)}
                        >
                            <FontAwesomeIcon size="4x" icon={faSearch} />
                            <span>재난문자 검색</span>
                        </Button>
                    </ButtonGroup>
                    {menu && (
                        <div className="help__content">
                            <p>{menuContents[menu - 1].title}</p>
                            <span>{menuContents[menu - 1].body}</span>
                            <Button
                                onClick={() =>
                                    history.push(menuContents[menu - 1].url)
                                }
                            >
                                바로가기
                            </Button>
                        </div>
                    )}
                </Card.Body>
                <Button
                    className="help__card__btn"
                    variant="outline-light"
                    onClick={() => history.push(urls.home)}
                >
                    돌아가기
                </Button>
            </Card>
        </Container>
    );
};

export default Help;
