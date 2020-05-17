import React, { useMemo } from "react";
import Chart from "../components/Chart";
import { useQueryApi, useSumValuesByKey } from "../hooks";

const PieChart = () => {
  const { loading, payload = [], error } = useQueryApi();

  const dataColumnPrepared = useMemo(() => {
    const comments = payload.map(({ comments }: any) => ({ comments }));
    return comments.map(({ comments }: any) => ({
      comments,
      amount: 1,
    }));
  }, [payload]);

  const { dataMap: dataComments } = useSumValuesByKey({
    data: dataColumnPrepared,
    key: "comments",
    value: "amount",
  });

  const dataWithName = useMemo(() => {
    return dataComments.map((elem) => ({
      ...elem,
      name: `No. coments: ${elem.x}`,
    }));
  }, [dataComments]);

  const seriesCreatedAt = useMemo(() => {
    return [
      {
        type: "pie" as any,
        data: dataWithName,
        name: "Comments",
      },
    ];
  }, [dataWithName]);

  return (
    <>
      <Chart
        title="CreatedAt chart"
        series={seriesCreatedAt}
        tooltip={{
          headerFormat: "<b>{series.name}</b><br>",
          pointFormat:
            "with {point.x:.0f} comments there are {point.y:.0f} issues",
        }}
      />
    </>
  );
};

export default PieChart;
