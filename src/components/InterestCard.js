import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Card, Modal, Badge } from "react-bootstrap";
import { disasterNames } from "values/nameArrays";

const InterestCard = ({ info, handleClick }) => {
    const { id, nickname, interest_string } = info;

    const [interObj, setInterObj] = useState({});
    const [interStrArray, setInterStrArray] = useState([]);
    const [initInterStrArray, setInitInterStrArray] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const badgeVariants = ["primary", "danger", "warning"];

    useEffect(() => {
        setInterObj(JSON.parse(interest_string));

        if (interObj.mainLocation !== undefined) {
            // 지역
            let locationString = "";
            locationString = `${interObj.mainLocation}`;
            if (interObj.mainLocation !== "전체") {
                locationString = `${locationString} ${interObj.subLocation}`;
            }
            setInterStrArray([locationString]);

            // 재난 종류
            let disasterString = "";
            disasterString = `${disasterNames.main[interObj.disasterIndex]}`;
            if (interObj.disasterIndex === 1 || interObj.disasterIndex === 4) {
                disasterString = `${disasterString} (${interObj.disasterSubName})`;
            }
            // 지진 추가 키워드
            if (interObj.disasterIndex === 2) {
                let eqString = "";
                eqString = `${interObj.eq_mainLocation}`;
                if (interObj.eq_mainLocation !== "전체") {
                    eqString = `${eqString} ${interObj.eq_subLocation}`;
                }
                eqString = `${eqString}에서 발생한 규모`;
                eqString = `${eqString} ${interObj.scale_min} ~ ${interObj.scale_max}의 지진`;
                disasterString = `${disasterString} (${eqString})`;
            }
            setInterStrArray((prev) => [...prev, disasterString]);

            // 키워드
            let keywordString = "";
            disasterNames.sub[interObj.disasterIndex].forEach(
                (element, index) => {
                    if (interObj["disasterSubLevel" + index]) {
                        if (keywordString === "") {
                            keywordString = `${
                                disasterNames.sub[interObj.disasterIndex][index]
                            }`;
                        } else {
                            keywordString = `${keywordString} ${
                                disasterNames.sub[interObj.disasterIndex][index]
                            }`;
                        }
                    }
                }
            );
            setInterStrArray((prev) => [...prev, keywordString]);

            setInitInterStrArray(true);
        }
    }, [interObj.mainLocation]);

    const test = () => {
        console.log(interStrArray);
    };

    return (
        <>
            <Card id={id} className="interest__card-inner">
                <Card.Body>
                    <div className="interest__card-inner__title__div">
                        <span className="interest__card-inner__title">
                            {nickname}
                        </span>
                        <Button variant="danger" onClick={test}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                    </div>

                    {initInterStrArray &&
                        interStrArray.map((element, index) => (
                            <Badge
                                key={index}
                                className={`interest__card-inner__badge badge-color-${index}`}
                                pill
                                variant={badgeVariants[index]}
                                key={index}
                            >
                                {element}
                            </Badge>
                        ))}
                    <Button
                        className="w-100 interest__card-inner__btn"
                        onClick={handleClick[0]}
                    >
                        이동
                    </Button>
                </Card.Body>
            </Card>

            {/* 삭제 버튼 Modal */}
            <Modal
                id={id}
                show={show}
                onHide={handleClose}
                style={{ marginTop: "30vh" }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>관심분야 삭제 확인</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <strong style={{ marginRight: ".5rem" }}>{nickname}</strong>
                    관심분야를 정말 삭제 하시겠습니까?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClick[1]}>
                        삭제
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        취소
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default InterestCard;
