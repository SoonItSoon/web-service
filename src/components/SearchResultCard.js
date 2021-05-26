import React from "react";
import { disasterNames } from "values/nameArrays";
import "stylesheets/SearchResultCard.css";

const SearchResultCard = ({ result }) => {
    const { send_date, msg, send_location, sender, disaster, level } = result;
    const levelStr = disasterNames.array[disaster][level];

    return (
        <div className="searchResult__card">
            <span className="searchResult__card__header">
                {send_date} {sender} 발송 ({levelStr})
            </span>
            <span className="searchResult__card__msg">{msg}</span>
            <span className="searchResult__card__target">
                수신지역: {send_location}
            </span>
        </div>
    );
};

export default SearchResultCard;
