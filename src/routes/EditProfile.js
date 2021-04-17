import React from "react";
import useTitle from "@unsooks/use-title";
import locals from "values/locals";

const EditProfile = () => {
    useTitle(`Edit Profile | ${locals.siteName}`);
    return <h1>Edit Profile</h1>;
};

export default EditProfile;
