import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import * as React from "react";

type Props = {
  data?: Highcharts.PointOptionsObject[];
  title?: string;
};

const Chart: React.FC<Props> = ({ title, data = [] }) => {
  const options: Highcharts.Options = {
    series: [
      {
        type: "column",
        data
      },
    ],
    chart: {
      type: "column",
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br>",
      pointFormat: "{point.x:%e. %b}: {point.y:.2f} issues",
    },
    title: {
      text: title,
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        month: "%e. %b",
        year: "%b",
      },
      title: {
        text: "Date",
      },
    },
    plotOptions: {
      series: {
        marker: {
          enabled: true,
        },
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            plotOptions: {
              series: {
                marker: {
                  radius: 2.5,
                },
              },
            },
          },
        },
      ],
    },
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
