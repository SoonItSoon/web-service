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

const Timeline = ({ auth, userObj }) => {
    useTitle(`Timeline | ${locals.siteName}`);
    const history = useHistory();
    const goHome = () => {
        history.push(urls.home);
    };
    if (auth === false) {
        goHome();
    }

    const [tlList, setTLList] = useState([]);
    const [initList, setInitList] = useState(false);
    const [tlDate, setTLDate] = useState("2021-04-06");

    const getTimeline = async () => {
        await dbService
            .collection(`${userObj.uid}_TL`)
            .where("date", "==", "2021-04-06")
            .orderBy("time")
            .onSnapshot((snapshot) => {
                const tmpList = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setTLList(tmpList);
                setInitList(true);
            });
    };

    useEffect(() => {
        getTimeline();
    }, []);

    const showMap = () => {
        if (initList) {
        }
        // show Map
        var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        var options = {
            //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3, //지도의 레벨(확대, 축소 정도)
        };

        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
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
                <Button
                    className="timeline__card__btn"
                    variant="outline-light"
                    onClick={showMap}
                >
                    Show Map
                </Button>
                {initList && <MapBuilder tlList={tlList} />}
            </Card>
        </Container>
    );
};

export default Timeline;
