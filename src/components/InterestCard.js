import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Card, Modal, Spinner } from "react-bootstrap";
import Loading from "routes/Loading";

const InterestCard = ({ info, handleClick }) => {
    const { id, nickname, interest_string } = info;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [init, setInit] = useState(false);

    return (
        <>
            <Card id={id} className="interest__card-inner">
                <Card.Body>
                    <Card.Title>
                        <div className="interest__card-inner__title__div">
                            {nickname}
                            <Button variant="danger" onClick={handleShow}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </Button>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        {init ? (
                            <div>{interest_string}</div>
                        ) : (
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        )}
                    </Card.Text>
                    <Button
                        className="w-100 interest__card-inner__btn"
                        onClick={handleClick[0]}
                    >
                        이동
                    </Button>
                </Card.Body>
            </Card>
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
