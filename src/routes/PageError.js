import React from "react";
import useTitle from "@unsooks/use-title";
import locals from "values/locals";
import urls from "values/urls";
import { Button } from "bootstrap";

const PageError = () => {
    useTitle(`Error Page | ${locals.siteName}`);
    return (
        <>
            <h1>PageError</h1>
            <Button variant="dark" href={urls.home}>
                돌아가기
            </Button>
        </>
    );
};

export default PageError;
