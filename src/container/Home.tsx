import moment from "moment";
import React, { useMemo, useState } from "react";
import Chart from "../components/Chart";
import { dataApi } from "../dataApi";
import { useSumValuesByKey } from "../hooks";
import { DateFormat } from "../utils";

export const Home = () => {
  const [data] = useState(dataApi);

  const dataColumnPrepared = useMemo(() => {
    return data.map(
      ({ created_at: createdAt, updated_at: updateAt, comments }) => ({
        updateAt: moment(updateAt, DateFormat).valueOf(),
        createdAt: moment(createdAt, DateFormat).valueOf(),
        comments,
        issues: 1,
      })
    );
  }, [data]);

  const { dataMap: dataCreatedAtIssues } = useSumValuesByKey({
    data: dataColumnPrepared,
    key: "createdAt",
    value: "issues",
  });

  const { dataMap: dataCreatedAtComments } = useSumValuesByKey({
    data: dataColumnPrepared,
    key: "createdAt",
    value: "comments",
  });

  const { dataMap: dataUpdatedAtIssues } = useSumValuesByKey({
    data: dataColumnPrepared,
    key: "updateAt",
    value: "issues",
  });

  const { dataMap: dataUpdateAtComments } = useSumValuesByKey({
    data: dataColumnPrepared,
    key: "updateAt",
    value: "comments",
  });

  const seriesCreatedAt = [
    {
      type: "column" as any,
      data: dataCreatedAtIssues,
      name: "Issues",
    },
    {
      type: "column" as any,
      data: dataCreatedAtComments,
      name: "comments",
    },
  ];

  const seriesUpdatedAt = [
    {
      type: "column" as any,
      data: dataUpdatedAtIssues,
      name: "Issues",
    },
    {
      type: "column" as any,
      data: dataUpdateAtComments,
      name: "comments",
    },
  ];

  return (
    <div>
      <Chart title="CreatedAt chart" series={seriesCreatedAt} />
      <Chart title="UpdateAt chart" series={seriesUpdatedAt} />
    </div>
  );
};
