import React, { useState } from "react";
import { Container, Button, Card, Row, Form, Col } from "react-bootstrap";
import "stylesheets/Search.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "values/locals";
import urls from "values/urls";
import { Calendar } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { locNames as loc, disasterNames as disaster } from "values/nameArrays";

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
    const [condition, setCondition] = useState({
        startDate: addDays(new Date(), -1),
        endDate: new Date(),
        mainLocation: "전체",
        subLocation: "전체",
        disaster: 1,
        disasterName: "전체",
    });

    const [calendar, setCalendar] = useState([
        {
            startDate: addDays(new Date(), -1),
            endDate: new Date(),
            key: "selection",
            isStart: true,
        },
    ]);
    const locNames = loc.shortName;
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
            setCondition((prev) => ({
                ...prev,
                startDate: date,
            }));
        } else {
            setCalendar([
                {
                    startDate: condition.startDate,
                    endDate: date,
                    key: "selection",
                    isStart: true,
                },
            ]);
            setCondition((prev) => ({
                ...prev,
                endDate: date,
            }));
        }
    };

    const handlePickLoc = [
        ({ target: { value } }) => {
            setLocSubNames(loc.array[value]);
            setCondition((prev) => ({
                ...prev,
                mainLocation: locNames[value],
            }));
        },
        ({ target: { value } }) => {
            setCondition((prev) => ({
                ...prev,
                subLocation: locSubNames[value],
            }));
        },
    ];

    const handlePickDisaster = [
        ({ target: { value } }) => {
            setDisasterSubNames(disaster.sub[value]);
            setCondition((prev) => ({
                ...prev,
                disaster: value,
            }));
        },
        ({ target: { value } }) => {
            setCondition((prev) => ({
                ...prev,
                disasterName: disasterSubNames[value],
            }));
        },
    ];

    const showCondition = () => console.log(condition);

    return (
        <Container className="search__container">
            <Card className="text-dark search__card">
                <Card.Title className="text-center search__card__title">
                    재난문자 검색
                </Card.Title>
                <Row>
                    <Card className="search__card-inner">
                        <Card.Body>
                            <div>
                                <span>기간</span>
                                <Calendar
                                    displayMode={"dateRange"}
                                    ranges={calendar}
                                    showSelectionPreview={true}
                                    onChange={handlePickCalendar}
                                />
                            </div>
                            <div>
                                <span>지역</span>
                                <Form>
                                    <Form.Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Control
                                                    as="select"
                                                    size="sm"
                                                    custom
                                                    onChange={handlePickLoc[0]}
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
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                as="select"
                                                size="sm"
                                                custom
                                                onChange={handlePickLoc[1]}
                                            >
                                                {locSubNames.map((loc, idx) => (
                                                    <option
                                                        key={idx}
                                                        value={idx}
                                                    >
                                                        {loc}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </div>
                            <div>
                                <span>재난 구분</span>
                                <Form>
                                    <Form.Row>
                                        <Col>
                                            <Form.Group>
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
                                            </Form.Group>
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
                                                                key={idx}
                                                                value={idx}
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
                            <div>
                                <span>알림 종류</span>
                                {disaster.array[condition.disaster].map(
                                    (item) => item
                                )}
                            </div>
                            <Button className="w-100" onClick={showCondition}>
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
