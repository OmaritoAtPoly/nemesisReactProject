import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import * as React from "react";

const options: Highcharts.Options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3],
    },
  ],
};

const ChartIssues = () => {
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        // {...props}
      />
    </div>
  );
};

export default ChartIssues;
