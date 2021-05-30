/*global kakao*/
import React, { useEffect, useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import "stylesheets/CheckSafety.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "values/locals";
import urls from "values/urls";
import { dbService } from "fbInstance";
import MapBuilder from "components/MapBuilder";
import "react-datepicker/dist/react-datepicker.css";

const CheckSafety = ({ auth, userObj }) => {
    useTitle(`CheckSafety | ${locals.siteName}`);
    const history = useHistory();
    if (!auth) {
        history.push(urls.home);
    }

    const [initDangerList, setInitDangerList] = useState(false);
    const [dangerList, setDangerList] = useState([]);

    const getDangerTimeline = () => {
        dbService
            .collection("userdata")
            .doc(`${userObj.uid}`)
            .collection("timeline")
            .where("danger", "==", 2)
            .orderBy("date")
            .onSnapshot((snapshot) => {
                const tmpList = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setDangerList(tmpList);
                if (tmpList.length !== 0) {
                    setInitDangerList(true);
                }
            });
    };

    useEffect(() => {
        getDangerTimeline();
    }, []);

    return (
        <Container className="checksafety__container">
            <Card className="text-dark checksafety__card">
                <Card.Title className="text-center checksafety__card__title">
                    위험 동선 확인
                </Card.Title>
                {initDangerList ? (
                    <MapBuilder tlList={dangerList} danger={true} />
                ) : (
                    <div className="checksafety__map">
                        <span className="checksafety__map__span">
                            위험 동선이 없습니다.
                        </span>
                    </div>
                )}
                <Button
                    className="checksafety__card__btn"
                    variant="outline-light"
                    onClick={() => history.push(urls.home)}
                >
                    돌아가기
                </Button>
            </Card>
        </Container>
    );
};

export default CheckSafety;
