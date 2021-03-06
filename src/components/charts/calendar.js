import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";

import data from "../../data/days.json";

const Calendar = () => (
  <ResponsiveCalendar
    data={data}
    from="2020-03-22"
    to="2020-06-10"
    emptyColor="#eeeeee"
    colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    yearSpacing={40}
    minValue={500}
    maxValue={73000}
    monthBorderColor="#ffffff"
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
    legends={[
      {
        anchor: "bottom-right",
        direction: "row",
        translateY: 36,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: "right-to-left",
      },
    ]}
  />
);

export default Calendar;
