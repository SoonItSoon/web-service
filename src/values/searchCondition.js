import { addDays } from "date-fns";

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

    set: (target, value) => {
        condition[target] = value;
    },

    toogleLevel: (target) => {
        condition.levels[target] = !condition.levels[target];
    },
};

export const makeURL = (kind) => {
    let url = `http://52.78.40.18:5000/${kind}`;

    // start_date YYYY-MM-DD hh:mm:ss
    // required
    const start_date = condition.startDate;
    url += `?start_date=${start_date.getFullYear()}-${start_date.getMonth()}-${start_date.getDate()} ${start_date.getHours()}:${start_date.getMinutes()}:${start_date.getSeconds()}`;

    // end_date YYYY-MM-DD hh:mm:ss
    // not required (default Today)
    const end_date = condition.endDate;
    url += `&end_date=${end_date.getFullYear()}-${end_date.getMonth()}-${end_date.getDate()} ${end_date.getHours()}:${end_date.getMinutes()}:${end_date.getSeconds()}`;

    // main_location
    // not required (default 전체)
    url += `&main_location=${condition.mainLocation}`;

    // sub_location
    // not required (default 전체)
    url += `&sub_location=${condition.subLocation}`;

    // disaster
    // required
    url += `&disaster=${condition.disaster}`;

    // levels
    // required
    let levelStr;
    condition.levels.map((value, idx) => {
        if (value) {
            levelStr += idx;
            if (idx !== 9) levelStr += ",";
        }
    });
    url += `&level=${levelStr}`;

    console.log(`url: ${url}`);
};
