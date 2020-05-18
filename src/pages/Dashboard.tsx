import React from "react";
import { Redirect } from "react-router-dom";
import { Header } from "../components/Header";
import ColumnChart from "../containers/ColumnChart";

const token = localStorage.getItem("isLogged");

const Dashboard = () => {
return token ? (
    <>
      <Header />
      <ColumnChart />
    </>
  ) : <Redirect to={"/login"}/>
};

export default Dashboard;
