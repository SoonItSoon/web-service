import React, { useEffect, useState } from "react";
import useTitle from "@unsooks/use-title";
import locals from "values/locals";
import { useHistory, useLocation } from "react-router";
import urls from "values/urls";
import { Badge, Container, Pagination, Button } from "react-bootstrap";
import { condition } from "values/searchCondition";
import "stylesheets/Result.css";
import { disasterNames } from "values/nameArrays";
import axios from "axios";
import SearchResultCard from "components/SearchResultCard";
import Loading from "../partials/Loading";

const Result = () => {
    useTitle(`Result | ${locals.siteName}`);
    const history = useHistory();
    const location = useLocation();
    let url = "";
    let prevLink = urls.home;
    if (location.state === undefined) history.push(prevLink);
    else {
        // url = location.state.url;
        prevLink = location.state.prevLink;
    }
    url =
        "http://52.78.40.18:5000/search?start_date=2020-04-25%2018:22:19&end_date=2021-04-26%2018:22:19&disaster=1&level=1,2,3";

    const badgeVariants = ["success", "primary", "danger", "warning"];
    const [conditionStrArr, setConditionStrArr] = useState([]);

    const [loadingPage, setLoadingPage] = useState(true);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const pageUnit = 10;
    const [content, setContent] = useState([]);

    const getResult = async (url) => {
        setContent([]);
        setLoadingPage(true);
        await axios.get(url).then(({ data }) => {
            setLastPage(Math.ceil(Object.keys(data).length / pageUnit));
            for (
                let idx = page * pageUnit - (pageUnit - 1);
                idx <= page * pageUnit;
                idx++
            ) {
                if (data[idx]) setContent((prev) => [...prev, data[idx]]);
            }
            setLoadingPage(false);
        });
    };

    const initConditionStrArr = () => {
        setConditionStrArr([]);

        let dateStr = "기간: ";
        dateStr += `${condition.startDate.getFullYear()}년 ${condition.startDate.getMonth()}월 ${condition.startDate.getDate()}일`;
        dateStr += " ~ ";
        dateStr += `${condition.endDate.getFullYear()}년 ${condition.endDate.getMonth()}월 ${condition.endDate.getDate()}일`;
        setConditionStrArr((prev) => [...prev, dateStr]);

        let locationStr = "지역: 전체";
        if (condition.mainLocation !== "전체") {
            locationStr = `지역: ${condition.mainLocation} ${condition.subLocation}`;
        }
        setConditionStrArr((prev) => [...prev, locationStr]);

        let disasterStr = `재난 종류: ${
            disasterNames.main[condition.disaster]
        }`;
        if (condition.disasterName !== "전체")
            disasterStr += ` (${condition.disasterName})`;
        setConditionStrArr((prev) => [...prev, disasterStr]);

        let levelStr = "알림 종류: ";
        condition.levels.map((value, idx) => {
            if (value)
                levelStr += `${disasterNames.array[condition.disaster][idx]} `;
        });
        setConditionStrArr((prev) => [...prev, levelStr]);

        if (condition.innerText !== "") {
            let innerTextStr = `텍스트 검색: ${condition.innerText}`;
            setConditionStrArr((prev) => [...prev, innerTextStr]);
        }
    };

    useEffect(() => {
        initConditionStrArr();
        getResult(url);
    }, [page]);

    return (
        <Container className="result__container">
            <span className="result__title">재난문자 검색 결과</span>
            {conditionStrArr.map((str, idx) => (
                <Badge
                    key={idx}
                    className="result__badge"
                    pill
                    variant={badgeVariants[idx % 4]}
                >
                    {str}
                </Badge>
            ))}
            <div className="result__content__box">
                {!loadingPage ? (
                    content.length === 0 ? (
                        <span>No Result</span>
                    ) : (
                        content.map((element, idx) => (
                            <SearchResultCard key={idx} result={element} />
                        ))
                    )
                ) : (
                    <Loading />
                )}
                {lastPage !== 0 && (
                    <Pagination className="result__pagination">
                        <Pagination.First onClick={() => setPage(1)} />
                        <Pagination.Prev
                            onClick={() => {
                                if (page !== 1) setPage(page - 1);
                            }}
                        />
                        {page === lastPage && (
                            <Pagination.Item onClick={() => setPage(page - 4)}>
                                {page - 4}
                            </Pagination.Item>
                        )}
                        {(page === lastPage || page === lastPage - 1) && (
                            <Pagination.Item onClick={() => setPage(page - 3)}>
                                {page - 3}
                            </Pagination.Item>
                        )}
                        {page - 2 > 0 && (
                            <Pagination.Item onClick={() => setPage(page - 2)}>
                                {page - 2}
                            </Pagination.Item>
                        )}
                        {page - 1 > 0 && (
                            <Pagination.Item onClick={() => setPage(page - 1)}>
                                {page - 1}
                            </Pagination.Item>
                        )}
                        <Pagination.Item active>{page}</Pagination.Item>
                        {page + 1 <= lastPage && (
                            <Pagination.Item onClick={() => setPage(page + 1)}>
                                {page + 1}
                            </Pagination.Item>
                        )}
                        {page + 2 <= lastPage && (
                            <Pagination.Item onClick={() => setPage(page + 2)}>
                                {page + 2}
                            </Pagination.Item>
                        )}
                        {(page === 1 || page === 2) && (
                            <Pagination.Item onClick={() => setPage(page + 3)}>
                                {page + 3}
                            </Pagination.Item>
                        )}
                        {page === 1 && (
                            <Pagination.Item onClick={() => setPage(page + 4)}>
                                {page + 4}
                            </Pagination.Item>
                        )}
                        <Pagination.Next
                            onClick={() => {
                                if (page !== lastPage) setPage(page + 1);
                            }}
                        />
                        <Pagination.Last onClick={() => setPage(lastPage)} />
                    </Pagination>
                )}
            </div>
            <Button
                className="result__btn-goBack"
                onClick={() => history.push(prevLink)}
            >
                뒤로가기
            </Button>
        </Container>
    );
};

export default Result;
