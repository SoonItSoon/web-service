/*global kakao*/
import React, { useEffect, useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import "stylesheets/Timeline.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "values/locals";
import urls from "values/urls";
import { dbService } from "fbInstance";
import MapBuilder from "components/MapBuilder";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Timeline = ({ auth, userObj }) => {
    useTitle(`Timeline | ${locals.siteName}`);
    const history = useHistory();
    const goHome = () => {
        history.push(urls.home);
    };
    if (auth === false) {
        goHome();
    }

    const [initTLList, setInitTLList] = useState(false);
    const [tlList, setTLList] = useState([]);
    const [initTLDate, setInitTLDate] = useState(false);
    const [tlDate, setTLDate] = useState("");
    const [startDate, setStartDate] = useState(new Date());

    const changeDateString = (targetDate) => {
        const year = targetDate.getFullYear();
        const month = targetDate.getMonth() + 1;
        const date = targetDate.getDate();
        const dateString = `${year}-${month < 10 ? "0" + month : month}-${
            date < 10 ? "0" + date : date
        }`;
        setTLDate(dateString);
        setInitTLDate(true);
    };

    const getTimeline = () => {
        if (tlDate === "") {
            return;
        }
        dbService
            .collection("userdata")
            .doc(`${userObj.uid}`)
            .collection("timeline")
            .where("date", "==", tlDate)
            .orderBy("time")
            .onSnapshot((snapshot) => {
                const tmpList = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setTLList(tmpList);
                if (tmpList.length !== 0) {
                    setInitTLList(true);
                }
            });
    };

    useEffect(() => {
        if (initTLDate === false) {
            changeDateString(new Date());
        }
        getTimeline();
    }, [tlDate]);

    const showMap = (selectedDate) => {
        setStartDate(selectedDate);
        setInitTLList(false);
        changeDateString(selectedDate);
    };

    return (
        <Container className="timeline__container">
            <Card className="text-dark timeline__card">
                <Card.Title className="text-center timeline__card__title">
                    개인 동선 조회
                </Card.Title>
                <div className="timeline__datePicker__container">
                    <span
                        className="timeline__datePicker__span"
                        variant="outline-light"
                    >
                        Select Date :
                    </span>
                    <DatePicker
                        className="timeline__datePicker__picker"
                        selected={startDate}
                        onChange={showMap}
                    />
                </div>
                {initTLList ? (
                    <MapBuilder tlList={tlList} />
                ) : (
                    <div className="timeline__map">
                        <span className="timeline__map__span">
                            해당 날짜에 동선이 없습니다.
                        </span>
                    </div>
                )}
                <Button
                    className="timeline__card__btn"
                    variant="outline-light"
                    onClick={goHome}
                >
                    돌아가기
                </Button>
            </Card>
        </Container>
    );
};

export default Timeline;
