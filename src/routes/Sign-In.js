import React, { useState } from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Button, Card, Spinner } from "react-bootstrap";
import { authService, fbInstance } from "fbInstance";
import "stylesheets/Sign-In.css";
import { useHistory } from "react-router";
import useTitle from "@unsooks/use-title";
import locals from "locals";
import urls from "urls";

const SignIn = ({ auth }) => {
    useTitle(`Sign In | ${locals.siteName}`);

    const [isLoading, setLoading] = useState(false);
    const history = useHistory();

    if (auth !== null) {
    }

    const onClickSignIn = async () => {
        setLoading(true);
        const provider = new fbInstance.auth.GoogleAuthProvider();
        await authService.signInWithPopup(provider);
        history.push(urls.home);
    };

    return (
        <Container className="signin__container">
            <Card className="text-dark signin__card">
                <Card.Title className="text-center signin__card__title">
                    Sign In
                </Card.Title>
                <Button
                    className="signin__card__btn"
                    variant="outline-light"
                    disabled={isLoading}
                    onClick={!isLoading ? onClickSignIn : null}
                >
                    {isLoading ? (
                        <>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            <span className="sr-only">Loading...</span>
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faGoogle} />
                            <span>Countinue With Google</span>
                        </>
                    )}
                </Button>
            </Card>
        </Container>
    );
};

export default SignIn;
