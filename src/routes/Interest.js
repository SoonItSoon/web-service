import React, { useEffect, useState } from "react";
import { Container, Button, Card, Row, Spinner } from "react-bootstrap";
import "stylesheets/Interest.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "values/locals";
import urls from "values/urls";
import { dbService } from "fbInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import InterestCard from "components/InterestCard";
import { condition, makeURL } from "values/searchCondition";

const Interest = ({ auth, userObj }) => {
    useTitle(`Interest | ${locals.siteName}`);
    const history = useHistory();
    if (auth === false) {
        history.push(urls.home);
    }

    const [initInterList, setInitInterList] = useState(false);
    const [interList, setInterList] = useState([]);

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

    useEffect(() => {
        getInterest();
    }, []);

    const handleInterestClick = ({ target }) => {
        const {
            parentNode: {
                parentNode: { id },
            },
        } = target;
        const { interest_string } = interList.find(
            (element) => element.id === id
        );
        const interestJson = JSON.parse(interest_string);
        condition.initAll();
        condition.set("mainLocation", interestJson.mainLocation);
        condition.set("subLocation", interestJson.subLocation);
        condition.set("disaster", interestJson.disasterIndex);
        condition.set("disasterName", interestJson.disasterSubName);
        condition.levels.map((value, idx) => {
            if (interestJson[`disasterSubLevel${idx}`])
                condition.toogleLevel(idx);
        });

        const url = makeURL("search");
        history.push({
            pathname: urls.result,
            state: { auth, url, prevLink: urls.interest },
        });
    };

    const handleDeleteClick = async ({ target }) => {
        const {
            parentNode: {
                parentNode: {
                    parentNode: { id },
                },
            },
        } = target;
        await dbService
            .collection("userdata")
            .doc(`${userObj.uid}`)
            .collection("interest")
            .doc(id)
            .delete();
    };

    useEffect(() => {
        condition.initAll();
    }, []);

    return (
        <Container className="interest__container">
            <Card className="text-dark interest__card">
                <Card.Title className="text-center interest__card__title">
                    설정된 관심분야
                </Card.Title>
                <Row>
                    {initInterList ? (
                        interList.map((element) => {
                            return (
                                <InterestCard
                                    key={element.id}
                                    info={element}
                                    handleClick={[
                                        handleInterestClick,
                                        handleDeleteClick,
                                    ]}
                                />
                            );
                        })
                    ) : (
                        <Card className="interest__card-inner text-center">
                            <Card.Body>
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            </Card.Body>
                        </Card>
                    )}
                    {interList.length < 3 && (
                        <Card className="interest__card-inner text-center">
                            <Card.Body>
                                <Button className="w-100 interest__card-inner__btn">
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        style={{ marginRight: ".5rem" }}
                                    />
                                    관심분야 추가
                                </Button>
                            </Card.Body>
                        </Card>
                    )}
                </Row>
                <Button
                    className="interest__card__btn"
                    variant="outline-light"
                    onClick={() => history.push(urls.home)}
                >
                    뒤로가기
                </Button>
            </Card>
        </Container>
    );
};

export default Interest;
