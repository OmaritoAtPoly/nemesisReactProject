import React, { useCallback, useState } from "react";
import { Redirect } from "react-router-dom";
import Alert from "../components/Alert";
import { Header } from "../components/Header";
import Suspense from "../components/Suspense";
import ColumnChart from "../containers/ColumnChart";
import PieChart from "../containers/PieChart";
import { isLogged } from "../services/Auth";

const Dashboard = () => {
  const [initialMessage, setInitialMessage] = useState<boolean>(isLogged());

  const closeError = useCallback(() => {
    setInitialMessage(false);
  }, [setInitialMessage]);

  const token = localStorage.getItem("isLogged");

  return token ? (
    <>
      <Header />
      <Suspense>
        <ColumnChart />
        <PieChart />
      </Suspense>
      <Alert
        message="Welcome to your dashboard"
        open={initialMessage}
        onClose={closeError}
        severity="success"
      />
    </>
  ) : (
    <Redirect to={"/login"} />
  );
};

export default Dashboard;
