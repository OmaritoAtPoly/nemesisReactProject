import React from "react";
import { Redirect } from "react-router-dom";
import { Header } from "../components/Header";
import ColumnChart from "../containers/ColumnChart";

import Suspense from "../components/Suspense";
import PieChart from "../containers/PieChart";
import { getCurrentUser } from "../services/Auth";
const Dashboard = () => {
console.log(getCurrentUser())
  const token = localStorage.getItem("isLogged");
    return token ? (
    <>
      <Header />
      <Suspense>
        <ColumnChart />
        <PieChart />
      </Suspense>
    </>
  ) : <Redirect to={"/login"} />
};

export default Dashboard;
