import React from 'react';
import { Container } from 'react-bootstrap';
import 'stylesheets/loading.css';

const Loading = () => {
    return (
        <Container className='text-center loading__container'>
            <span>Loading...</span>
        </Container>
    )
}

export default Loading;