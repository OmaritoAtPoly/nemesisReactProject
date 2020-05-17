import React from "react";
import { Header } from "../components/Header";
import Suspense from "../components/Suspense";
import ColumnChart from "../containers/ColumnChart";
import PieChart from "../containers/PieChart";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Suspense>
        <ColumnChart />
        <PieChart />
      </Suspense>
    </>
  );
};

export default Dashboard;
