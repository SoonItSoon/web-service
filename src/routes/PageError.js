import { Button } from 'bootstrap';
import React from 'react';
import urls from 'urls';

const PageError = () => {
    return (
        <>
            <h1>PageError</h1>
            <Button variant="dark" href={urls.home}>Go to Home</Button>
        </>
    )
}

export default PageError;