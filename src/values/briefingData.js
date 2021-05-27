import { addDays } from "date-fns";

export const pieData = [
    {
        id: "go",
        label: "go",
        value: 450,
        color: "hsl(224, 70%, 50%)",
    },
    {
        id: "haskell",
        label: "haskell",
        value: 369,
        color: "hsl(116, 70%, 50%)",
    },
    {
        id: "stylus",
        label: "stylus",
        value: 536,
        color: "hsl(322, 70%, 50%)",
    },
    {
        id: "erlang",
        label: "erlang",
        value: 168,
        color: "hsl(167, 70%, 50%)",
    },
    {
        id: "make",
        label: "make",
        value: 429,
        color: "hsl(200, 70%, 50%)",
    },
];

const today = new Date();
export const barData = [
    [
        {
            date: `${addDays(today, -6).getDate()}일`,
            count: 20,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -5).getDate()}일`,
            count: 34,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -4).getDate()}일`,
            count: 12,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -3).getDate()}일`,
            count: 44,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -2).getDate()}일`,
            count: 11,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -1).getDate()}일`,
            count: 23,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: "오늘",
            count: 43,
            countColor: "hsl(352, 70%, 50%)",
        },
    ],
    [
        {
            date: `${addDays(today, -6).getDate()}일`,
            count: 1,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -5).getDate()}일`,
            count: 2,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -4).getDate()}일`,
            count: 3,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -3).getDate()}일`,
            count: 2,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -2).getDate()}일`,
            count: 1,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -1).getDate()}일`,
            count: 0,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: "오늘",
            count: 4,
            countColor: "hsl(352, 70%, 50%)",
        },
    ],
    [
        {
            date: `${addDays(today, -6).getDate()}일`,
            count: 3,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -5).getDate()}일`,
            count: 2,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -4).getDate()}일`,
            count: 5,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -3).getDate()}일`,
            count: 6,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -2).getDate()}일`,
            count: 7,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -1).getDate()}일`,
            count: 1,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: "오늘",
            count: 12,
            countColor: "hsl(352, 70%, 50%)",
        },
    ],
    [
        {
            date: `${addDays(today, -6).getDate()}일`,
            count: 5,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -5).getDate()}일`,
            count: 0,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -4).getDate()}일`,
            count: 0,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -3).getDate()}일`,
            count: 2,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -2).getDate()}일`,
            count: 1,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -1).getDate()}일`,
            count: 3,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: "오늘",
            count: 1,
            countColor: "hsl(352, 70%, 50%)",
        },
    ],
];
