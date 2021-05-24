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
    let url;
    if (kind === "search") {
    } else if (kind === "count") {
    }
};
