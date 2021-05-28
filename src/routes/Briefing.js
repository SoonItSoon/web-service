import React, { useEffect, useState } from "react";
import { Container, Button, Card, Row, Spinner } from "react-bootstrap";
import "stylesheets/Briefing.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "values/locals";
import urls from "values/urls";
import { dbService } from "fbInstance";
import CustomResponsivePie from "components/CustomResponsivePie";
import CustomResponsiveBar from "components/CustomResponsiveBar";
import { barData, pieData } from "values/briefingData";

const Briefing = ({ auth, userObj }) => {
    useTitle(`Briefing | ${locals.siteName}`);
    const history = useHistory();
    if (!auth) {
        history.push(urls.home);
    }

    const [initInterList, setInitInterList] = useState(false);
    const [interList, setInterList] = useState([]);
    const [initBriefingData, setInitBriefingData] = useState(false);
    const [briefingData, setBriefingData] = useState([]);

    const getInterest = () => {
        dbService
            .collection("userdata")
            .doc(`${userObj.uid}`)
            .collection("interest")
            .orderBy("nickname")
            .onSnapshot((snapshot) => {
                const tmpList = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setInterList(tmpList);
                if (tmpList.length !== 0) {
                    setInitInterList(true);
                }
            });
    };

    const updateBriefingData = () => {
        setInitBriefingData(false);
        setBriefingData([]);

        setBriefingData((prev) => [...prev, pieData]);

        setBriefingData((prev) => [...prev, barData[0]]);
        setBriefingData((prev) => [...prev, barData[1]]);
        setBriefingData((prev) => [...prev, barData[2]]);
        setBriefingData((prev) => [...prev, barData[3]]);

        setInitBriefingData(true);
    };

    useEffect(() => {
        getInterest();
        updateBriefingData();
    }, []);

    return (
        <Container className="briefing__container">
            <div>
                <Card className="briefing__card briefing__card-all">
                    <Card.Title className="briefing__card__title">
                        전체 재난문자 통계
                    </Card.Title>
                    <Card.Body className="briefing__card__body">
                        <div className="h-50">
                            <CustomResponsivePie data={briefingData[0]} />
                        </div>
                        <div className="h-50">
                            <CustomResponsiveBar data={briefingData[1]} />
                        </div>
                    </Card.Body>
                </Card>
                <div className="briefing__div-interest">
                    {initInterList ? (
                        interList.map((element, idx) => {
                            return (
                                <Card
                                    key={element.id}
                                    className="briefing__card briefing__card-interest"
                                >
                                    <Card.Title className="briefing__card__title">
                                        {element.nickname}
                                    </Card.Title>
                                    <Card.Body className="briefing__card__body">
                                        <CustomResponsiveBar
                                            data={briefingData[idx + 2]}
                                        />
                                    </Card.Body>
                                </Card>
                            );
                        })
                    ) : (
                        <Card className="text-center">
                            <Card.Body>
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
            <Button
                className="briefing__btn-goBack"
                onClick={() => history.push(urls.home)}
            >
                뒤로가기
            </Button>
        </Container>
    );
};

export default Briefing;
