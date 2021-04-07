/*global kakao*/
import React, { useEffect, useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import "stylesheets/Timeline.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "locals";
import urls from "urls";
import { dbService } from "fbInstance";
import MapBuilder from "components/MapBuilder";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Timeline = ({ auth, userObj }) => {
    useTitle(`Timeline | ${locals.siteName}`);
    const history = useHistory();
    if (auth === false) {
        goHome();
    }
    const goHome = () => {
        history.push(urls.home);
    };

    const [initList, setInitList] = useState(false);
    const [tlList, setTLList] = useState([]);
    const [initDate, setInitDate] = useState(false);
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
        setInitDate(true);
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
                    setInitList(true);
                }
            });
    };

    useEffect(() => {
        if (initDate === false) {
            changeDateString(new Date());
        }
        getTimeline();
    }, [tlDate]);

    const showMap = (selectedDate) => {
        setStartDate(selectedDate);
        setInitList(false);
        changeDateString(selectedDate);
    };

    return (
        <Container className="timeline__container">
            <Card className="text-dark timeline__card">
                <Card.Title className="text-center timeline__card__title">
                    Timeline
                </Card.Title>
                <Button
                    className="timeline__card__btn"
                    variant="outline-light"
                    onClick={goHome}
                >
                    Go Back Home
                </Button>
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
                {initList ? (
                    <MapBuilder tlList={tlList} />
                ) : (
                    <div className="timeline__map">
                        <span className="timeline__map__span">
                            해당 날짜에 동선이 없습니다.
                        </span>
                    </div>
                )}
            </Card>
        </Container>
    );
};

export default Timeline;
