import React from 'react';
import useTitle from '@unsooks/use-title';
import locals from 'locals';

const Home = () => {
    useTitle(`Home | ${locals.siteName}`);
    return (
        <h1>Home</h1>
    )
}

export default Home;