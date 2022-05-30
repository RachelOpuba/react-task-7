import React from "react";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Sidebar = () => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  console.log(user);

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/react-task-7");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="side-bar">
        <div className="sidebar-container">
          <NavLink to="/sidebar">Dashboard</NavLink>
          <NavLink to="courses">Courses</NavLink>
          <NavLink to="profile">Profile</NavLink>

          <div>
            <button className="logout" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
