import React, { useState } from "react";
import { Container, Button, Card, Row, Form, Col } from "react-bootstrap";
import "stylesheets/Search.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "values/locals";
import urls from "values/urls";
import { Calendar } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { locNames as loc, disasterNames as disaster } from "values/nameArrays";
import { condition, makeURL } from "values/searchCondition";

const Search = ({ auth }) => {
    useTitle(`Search | ${locals.siteName}`);
    const history = useHistory();
    const goHome = () => {
        history.push(urls.home);
    };
    if (auth === false) {
        goHome();
    }

    const [init, setInit] = useState(false);

    const [calendar, setCalendar] = useState([
        {
            startDate: addDays(new Date(), -1),
            endDate: new Date(),
            key: "selection",
            isStart: true,
        },
    ]);
    const locNames = loc.longName;
    const [locSubNames, setLocSubNames] = useState(["전체"]);
    const disasterNames = disaster.main;
    const [disasterSubNames, setDisasterSubNames] = useState(disaster.sub[1]);

    const handlePickCalendar = (date) => {
        if (calendar[0].isStart) {
            setCalendar([
                {
                    startDate: date,
                    endDate: condition.endDate,
                    key: "selection",
                    isStart: false,
                },
            ]);
            condition.set("startDate", date);
        } else {
            setCalendar([
                {
                    startDate: condition.startDate,
                    endDate: date,
                    key: "selection",
                    isStart: true,
                },
            ]);
            condition.set("endDate", date);
        }
    };

    const handlePickLoc = [
        ({ target: { value } }) => {
            setLocSubNames(loc.array[value]);
            condition.set("mainLocation", locNames[value]);
            condition.init("subLocation");
        },
        ({ target: { value } }) => {
            condition.set("subLocation", locSubNames[value]);
        },
    ];

    const handlePickDisaster = [
        ({ target: { value } }) => {
            setDisasterSubNames(disaster.sub[value]);
            condition.set("disaster", value);
            condition.init("disasterName");
            condition.init("levels");
        },
        ({ target: { value } }) => {
            condition.set("disasterName", disasterSubNames[value]);
        },
    ];

    const handleCheckBox = async ({ target: { value } }) => {
        condition.toogleLevel(value);
    };

    const handleSubmitInnerText = (evt) => {
        evt.preventDefault();
        handleSubmitSearch();
    };

    const handleChangeInnerText = ({ target: { value } }) => {
        condition.set("innerText", value);
    };

    const handleSubmitSearch = () => {
        console.log(condition);
        makeURL("search");
    };

    return (
        <Container className="search__container">
            <Card className="text-dark search__card">
                <Card.Title className="text-center search__card__title">
                    재난문자 검색
                </Card.Title>
                <Row>
                    <Card className="search__card-inner">
                        <Card.Body>
                            <div className="search__condition-div">
                                <div className="search__condition-div-col">
                                    <div className="search__condition-unit">
                                        <span className="search__condition-span">
                                            기간
                                        </span>
                                        <Calendar
                                            className="search__condition-content"
                                            displayMode={"dateRange"}
                                            ranges={calendar}
                                            showSelectionPreview={true}
                                            onChange={handlePickCalendar}
                                        />
                                    </div>
                                </div>
                                <div className="search__condition-div-col">
                                    <div className="search__condition-unit">
                                        <span className="search__condition-span">
                                            지역
                                        </span>
                                        <Form className="search__condition-content">
                                            <Form.Row>
                                                <Col>
                                                    <Form.Control
                                                        as="select"
                                                        size="sm"
                                                        custom
                                                        onChange={
                                                            handlePickLoc[0]
                                                        }
                                                    >
                                                        {locNames.map(
                                                            (loc, idx) => (
                                                                <option
                                                                    key={idx}
                                                                    value={idx}
                                                                >
                                                                    {loc}
                                                                </option>
                                                            )
                                                        )}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Control
                                                        as="select"
                                                        size="sm"
                                                        custom
                                                        onChange={
                                                            handlePickLoc[1]
                                                        }
                                                    >
                                                        {locSubNames.map(
                                                            (loc, idx) => (
                                                                <option
                                                                    key={idx}
                                                                    value={idx}
                                                                >
                                                                    {loc}
                                                                </option>
                                                            )
                                                        )}
                                                    </Form.Control>
                                                </Col>
                                            </Form.Row>
                                        </Form>
                                    </div>
                                    <div className="search__condition-unit">
                                        <span className="search__condition-span">
                                            재난 구분
                                        </span>
                                        <Form className="search__condition-content">
                                            <Form.Row>
                                                <Col>
                                                    <Form.Control
                                                        as="select"
                                                        size="sm"
                                                        custom
                                                        onChange={
                                                            handlePickDisaster[0]
                                                        }
                                                    >
                                                        {disasterNames.map(
                                                            (disaster, idx) => {
                                                                if (idx !== 0)
                                                                    return (
                                                                        <option
                                                                            key={
                                                                                idx
                                                                            }
                                                                            value={
                                                                                idx
                                                                            }
                                                                        >
                                                                            {
                                                                                disaster
                                                                            }
                                                                        </option>
                                                                    );
                                                            }
                                                        )}
                                                    </Form.Control>
                                                </Col>
                                                <Col>
                                                    {disasterSubNames[0] && (
                                                        <Form.Control
                                                            as="select"
                                                            size="sm"
                                                            custom
                                                            onChange={
                                                                handlePickDisaster[1]
                                                            }
                                                        >
                                                            {disasterSubNames.map(
                                                                (name, idx) => (
                                                                    <option
                                                                        key={
                                                                            idx
                                                                        }
                                                                        value={
                                                                            idx
                                                                        }
                                                                    >
                                                                        {name}
                                                                    </option>
                                                                )
                                                            )}
                                                        </Form.Control>
                                                    )}
                                                </Col>
                                            </Form.Row>
                                        </Form>
                                    </div>
                                    <div className="search__condition-unit">
                                        <span className="search__condition-span">
                                            알림 종류
                                        </span>
                                        <Form className="search__condition-content">
                                            <Form.Row>
                                                {disaster.array[
                                                    condition.disaster
                                                ].map((kind, idx) => {
                                                    if (kind !== "N/A") {
                                                        return (
                                                            <Col key={idx}>
                                                                <Form.Check
                                                                    type="checkbox"
                                                                    label={kind}
                                                                    value={idx}
                                                                    onClick={
                                                                        handleCheckBox
                                                                    }
                                                                />
                                                            </Col>
                                                        );
                                                    }
                                                })}
                                            </Form.Row>
                                        </Form>
                                    </div>
                                    {condition.disaster === "2" && (
                                        <>
                                            <div className="search__condition-unit">
                                                <span className="search__condition-span">
                                                    규모
                                                </span>
                                                <Form className="search__condition-content">
                                                    <Form.Control type="range" />
                                                </Form>
                                            </div>
                                            <div className="search__condition-unit">
                                                <span className="search__condition-span">
                                                    관측 지역
                                                </span>
                                            </div>
                                        </>
                                    )}
                                    <div className="search__condition-unit">
                                        <span className="search__condition-span">
                                            텍스트 검색
                                        </span>
                                        <Form
                                            className="search__condition-content"
                                            onSubmit={handleSubmitInnerText}
                                        >
                                            <Form.Control
                                                type="text"
                                                placeholder="검색어 입력"
                                                onChange={handleChangeInnerText}
                                            />
                                        </Form>
                                    </div>
                                </div>
                            </div>
                            <Button
                                className="w-100 search__card-inner__btn"
                                onClick={handleSubmitSearch}
                            >
                                검색
                            </Button>
                        </Card.Body>
                    </Card>
                </Row>
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
