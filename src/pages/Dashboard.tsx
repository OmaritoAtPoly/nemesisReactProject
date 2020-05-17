import React from "react";
import ColumnChart from "../containers/ColumnChart";
import { Header } from "../components/Header";
import { verificationTokeStorage } from '../utils'
import { useHistory } from "react-router-dom"

const Dashboard = () => {
  const { push } = useHistory();
  const redirect = verificationTokeStorage(window.localStorage.getItem("isLogged"));
  return (
    <>
     {redirect && (push("/login"))}
      <Header />
      <ColumnChart />
    </>
  );
};

export default Dashboard;
