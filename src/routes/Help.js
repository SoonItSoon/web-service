import React from 'react';
import useTitle from '@unsooks/use-title';
import locals from 'locals';

const Help = () => {
    useTitle(`Help | ${locals.siteName}`);
    return (
        <h1>Help</h1>
    )
}

export default Help;