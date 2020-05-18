import React, { useCallback, useState } from "react";
import Alert from "../components/Alert";
import { Header } from "../components/Header";
import Suspense from "../components/Suspense";
import ColumnChart from "../containers/ColumnChart";
import PieChart from "../containers/PieChart";
import { getCurrentUser, isLogged } from "../services/Auth";

const Dashboard = () => {
  const [initialMessage, setInitialMessage] = useState<boolean>(isLogged());

  const closeError = useCallback(() => {
    setInitialMessage(false);
  }, [setInitialMessage]);

  const token = getCurrentUser() as any;

  return (
    <>
      <Header />
      <Suspense>
        {token?.currentUser?.roll === "comments_reviewer" && <ColumnChart />}
        {token?.currentUser?.roll === "issue_reviewer" && <PieChart />}
      </Suspense>
      <Alert
        message="Welcome to your dashboard"
        open={initialMessage}
        onClose={closeError}
        severity="success"
      />
    </>
  );
};

export default Dashboard;
