import React from 'react';
import useTitle from '@unsooks/use-title';
import locals from 'locals';

const Profile = () => {
    useTitle(`Profile | ${locals.siteName}`);
    return (
        <h1>Profile</h1>
    )
}

export default Profile;