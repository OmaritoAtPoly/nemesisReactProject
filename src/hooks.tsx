import { PointOptionsObject } from "highcharts";
import { useMemo } from "react";

export const useSumValuesByKey = ({
  data,
  key,
  value,
}: {
  data: any[];
  key: string;
  value: string;
}) => {
  const dataMap = useMemo(() => {
    const map = new Map();
    const result: PointOptionsObject[] = [];
    data.forEach((elem) => {
      map.set(
        elem[key],
        map.get(elem[key]) ? map.get(elem[key]) + elem[value] : 1
      );
    });
    map.forEach((value, key) => {
      result.push({
        x: key,
        y: value,
      });
    });

    return result;
  }, [data, key, value]);
  return { dataMap };
};
