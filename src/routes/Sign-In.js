import React, { useState } from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Button, Card } from 'react-bootstrap';
import { authService, fbInstance } from 'fbInstance';
import 'stylesheets/sign-in.css'
import { useHistory } from 'react-router';

const SignIn = () => {
    const [isLoading, setLoading] = useState(false);
    const history = useHistory();
    
    const onClickSignIn = async () => {
        setLoading(true);
        const provider = new fbInstance.auth.GoogleAuthProvider();
        await authService.signInWithPopup(provider);
        history.push('/');
    }
    
    return (
        <Container className='container-signin'>
            <Card className="bg-dark text-white card-signin">
                <Card.Title className='text-center'>Sign In</Card.Title>
                <Button
                className='button-signin'
                variant="light"
                disabled={isLoading}
                onClick={!isLoading ? onClickSignIn : null}>
                {isLoading ? 'Wait for Countinue...' 
                    : (
                        <>
                            <FontAwesomeIcon icon={faGoogle} />
                            <span>Countinue With Google</span>
                        </>
                    )
                }
                </Button>
            </Card>
        </Container>
    )
}

export default SignIn;