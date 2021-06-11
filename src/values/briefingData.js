import { addDays } from "date-fns";

export const pieData = [
    {
        id: "전염병",
        value: 219,
    },
    {
        id: "호우",
        value: 12,
    },
    {
        id: "홍수",
        value: 8,
    },
    {
        id: "기타",
        value: 5,
    },
    // {
    //     id: "홍수",
    //     value: 429,
    // },
    // {
    //     id: "폭염",
    //     value: 429,
    // },
    // {
    //     id: "한파",
    //     value: 429,
    // },
    // {
    //     id: "호우",
    //     value: 429,
    // },
    // {
    //     id: "대설",
    //     value: 429,
    // },
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
            count: 1,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -4).getDate()}일`,
            count: 1,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -3).getDate()}일`,
            count: 1,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -2).getDate()}일`,
            count: 1,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -1).getDate()}일`,
            count: 2,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: "오늘",
            count: 1,
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
            count: 1,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -4).getDate()}일`,
            count: 1,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -3).getDate()}일`,
            count: 1,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -2).getDate()}일`,
            count: 1,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -1).getDate()}일`,
            count: 1,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: "오늘",
            count: 1,
            countColor: "hsl(352, 70%, 50%)",
        },
    ],
    [
        {
            date: `${addDays(today, -6).getDate()}일`,
            count: 0,
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
            count: 0,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -2).getDate()}일`,
            count: 0,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: `${addDays(today, -1).getDate()}일`,
            count: 1,
            countColor: "hsl(310, 70%, 50%)",
        },
        {
            date: "오늘",
            count: 0,
            countColor: "hsl(352, 70%, 50%)",
        },
    ],
];
