import { ResponsiveBar } from "@nivo/bar";

const CustomResponsiveBar = ({ data }) => (
    <ResponsiveBar
        data={data}
        keys={["count"]}
        indexBy="date"
        margin={{ top: 0, right: 0, bottom: 50, left: 0 }}
        padding={0.3}
        groupMode="grouped"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "oranges" }}
        colorBy="index"
        defs={[
            {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true,
            },
            {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
            },
        ]}
        fill={[
            {
                match: {
                    id: "fries",
                },
                id: "dots",
            },
            {
                match: {
                    id: "sandwich",
                },
                id: "lines",
            },
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "날짜별 발송된 수",
            legendPosition: "middle",
            legendOffset: 32,
        }}
        axisLeft={null}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="black"
        legends={[]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
);

export default CustomResponsiveBar;
