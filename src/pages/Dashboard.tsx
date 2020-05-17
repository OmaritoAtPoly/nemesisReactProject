import React from "react";
import ColumnChart from "../containers/ColumnChart";
import bcrypt, { compare, compareSync } from 'bcryptjs';

// { id: 1, name: "John", keyword: 12345, roll: 'comments_reviewer' },
// { id: 1, name: "MICKY", keyword: 98765, roll: 'issue_reviewer' },
// console.log(isValidUser("John",12345))
// // userSignIn();
// console.log(getCurrentUser())
// userLogOut();
// // console.log(userSignIn())


const data = String(12345)
const clave = bcrypt.hash(data, 10);
console.log(compareSync('12345', String(clave)));



const Dashboard = () => {

  return (
    <>
      <ColumnChart />
    </>
  );
};

export default Dashboard;
