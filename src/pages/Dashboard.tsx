import React from "react";
import { Redirect } from "react-router-dom";
import { Header } from "../components/Header";
import Suspense from "../components/Suspense";
import ColumnChart from "../containers/ColumnChart";
import PieChart from "../containers/PieChart";


const Dashboard = () => {

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
