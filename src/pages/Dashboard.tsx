import React from "react";
import { Redirect } from "react-router-dom";
import { Header } from "../components/Header";
import Suspense from "../components/Suspense";
import ColumnChart from "../containers/ColumnChart";
import PieChart from "../containers/PieChart";
import { getCurrentUser } from "../services/Auth";


const Dashboard = () => {
  const currentUserNanme = (getCurrentUser().userPayload.name);
  const token = localStorage.getItem("isLogged");
  return token ? (
    <>
      <Header />
      <Suspense>
        {currentUserNanme === 'John' ? <ColumnChart /> : <PieChart />}
      </Suspense>
    </>
  ) : <Redirect to={"/login"} />
};

export default Dashboard;
