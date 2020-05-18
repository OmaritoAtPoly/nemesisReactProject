import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Header } from "../components/Header";
import Suspense from "../components/Suspense";
import ColumnChart from "../containers/ColumnChart";
import PieChart from "../containers/PieChart";
import { isLogged } from "../services/Auth";

const Dashboard = () => {
  const { push } = useHistory();
  if (!isLogged()) push("/login");

  const token = localStorage.getItem("isLogged");
  return token ? (
    <>
      <Header />
      <Suspense>
        <ColumnChart />
        <PieChart />
      </Suspense>
    </>
  ) : (
    <Redirect to={"/login"} />
  );
};

export default Dashboard;
