import React, { useMemo, useState } from "react";
import Chart from "../components/Chart";
import { dataApi } from "../dataApi";
import { PointOptionsObject } from "highcharts";
import moment from "moment";
import { DateFormat } from "../utils";

export const Home = () => {
  const [data] = useState(dataApi);
  const dataIssues = useMemo(() => {
    const dateMap = new Map();
    const result: PointOptionsObject[] = [];
    data.forEach(({ created_at: createdAt }) => {
      console.log(moment(createdAt, DateFormat))
      const key = moment(createdAt, DateFormat).valueOf();
      dateMap.set(key, dateMap.get(key) ? dateMap.get(key) + 1 : 1);
    });

    dateMap.forEach((value, key) => {
      result.push({
        x: key,
        y: value,
      });
    });
    return result;
  }, [data]);

  return (
    <div>
      <Chart data={dataIssues} />
    </div>
  );
};
