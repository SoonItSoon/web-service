import React from 'react';
import { Container, ModalFooter } from 'react-bootstrap';

const AppFooter = () => {
    return (
        <ModalFooter>
            <Container>
                <p className='text-muted'>
                    SoonItSoon Web Service 2021 &copy;
                </p>
            </Container>
        </ModalFooter>
    )
}

export default AppFooter;