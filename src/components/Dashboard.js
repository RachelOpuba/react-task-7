import React from "react";
import { useUserAuth } from "../context/UserAuthContext";

const Dashboard = () => {
  let { user } = useUserAuth();
  console.log(user);
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-container">
          <div className="dashboard-text">
            <h1>Welcome</h1>
            <h1>{user && user.displayName ? user.displayName : user.email}</h1>
          </div>
          <div className="dashboard-img">
            <img src={process.env.PUBLIC_URL + "/images/Learning.jpg"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
