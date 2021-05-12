import React, { useState } from "react";
import { Container, Button, Card, Row } from "react-bootstrap";
import "stylesheets/Search.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "values/locals";
import urls from "values/urls";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

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
    const [startDate, setStartDate] = useState(addDays(new Date(), -1));
    const [endDate, setEndDate] = useState(new Date());

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection",
        },
    ]);

    const handleDateRangePicker = (date) => {
        console.log(date);
    };
    console.log(startDate, endDate);

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
                                <span>시작 날짜</span>
                                <DateRangePicker
                                    onChange={(item) =>
                                        setState([item.selection])
                                    }
                                    showSelectionPreview={true}
                                    moveRangeOnFirstSelection={false}
                                    months={1}
                                    ranges={state}
                                    direction="horizontal"
                                />
                            </div>
                            <div>
                                <span>종료 날짜</span>
                            </div>
                            <div>
                                <span>지역</span>
                            </div>
                            <div>
                                <span>재난 구분</span>
                            </div>
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
