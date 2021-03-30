import React from 'react';
import useTitle from '@unsooks/use-title';
import locals from 'locals';
import urls from 'urls';
import { Button } from 'bootstrap';

const PageError = () => {
    useTitle(`Error Page | ${locals.siteName}`);
    return (
        <>
            <h1>PageError</h1>
            <Button variant="dark" href={urls.home}>Go to Home</Button>
        </>
    )
}

export default PageError;