import { addDays } from "date-fns";

const keys = [
    "startDate",
    "endDate",
    "mainLocation",
    "subLocation",
    "disaster",
    "disasterName",
    "levels",
    "innerText",
];

const initValue = {
    startDate: addDays(new Date(), -1),
    endDate: new Date(),
    mainLocation: "전체",
    subLocation: "전체",
    disaster: 1,
    disasterName: "전체",
    levels: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ],
    innerText: "",
};

export const condition = {
    startDate: addDays(new Date(), -1),
    endDate: new Date(),
    mainLocation: "전체",
    subLocation: "전체",
    disaster: 1,
    disasterName: "전체",
    levels: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ],
    innerText: "",

    init: (target) => {
        condition[target] = initValue[target];
    },

    initAll: () => {
        keys.map((key) => {
            condition[key] = initValue[key];
        });
    },

    set: (target, value) => {
        condition[target] = value;
    },

    toogleLevel: (target) => {
        condition.levels[target] = !condition.levels[target];
    },
};

const zeroFormmatter = (target) => {
    return target < 10 ? `0${target}` : `${target}`;
};

export const makeURL = (kind) => {
    let url = `http://52.78.40.18:5000/${kind}`;

    // sort start and end date
    if (condition.startDate > condition.endDate) {
        const tmpDate = condition.startDate;
        condition.startDate = condition.endDate;
        condition.endDate = tmpDate;
    }

    // start_date YYYY-MM-DD hh:mm:ss
    // required
    const start_date = condition.startDate;
    url += `?start_date=${start_date.getFullYear()}-${zeroFormmatter(
        start_date.getMonth()
    )}-${zeroFormmatter(start_date.getDate())} ${zeroFormmatter(
        start_date.getHours()
    )}:${zeroFormmatter(start_date.getMinutes())}:${zeroFormmatter(
        start_date.getSeconds()
    )}`;

    // end_date YYYY-MM-DD hh:mm:ss
    // not required (default Today)
    const end_date = condition.endDate;
    url += `&end_date=${end_date.getFullYear()}-${zeroFormmatter(
        end_date.getMonth()
    )}-${zeroFormmatter(end_date.getDate())} ${zeroFormmatter(
        end_date.getHours()
    )}:${zeroFormmatter(end_date.getMinutes())}:${zeroFormmatter(
        end_date.getSeconds()
    )}`;

    // main_location
    // not required (default 전체)
    if (condition.mainLocation !== "전체") {
        url += `&main_location=${condition.mainLocation}`;

        // sub_location
        // not required (default 전체)
        if (condition.subLocation !== "전체")
            url += `&sub_location=${condition.subLocation}`;
    }

    // disaster
    // required
    url += `&disaster=${condition.disaster}`;

    // levels
    // required
    let levelStr = "";
    let requiredComma = false;
    condition.levels.map((value, idx) => {
        if (value) {
            if (requiredComma) levelStr += ",";
            requiredComma = true;
            levelStr += idx;
        }
    });
    url += `&level=${levelStr}`;

    // inner_text
    // not required
    if (condition.innerText !== "") url += `&inner_text=${condition.innerText}`;

    // name
    // not required
    if (condition.disasterName !== "전체")
        url += `&name=${condition.disasterName}`;

    return url;
};
