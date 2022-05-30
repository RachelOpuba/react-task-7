import React from "react";
import { useUserAuth } from "../context/UserAuthContext";

const Profile = () => {
  let { user } = useUserAuth();
  return (
    <>
      <div className="profile-page">
        <div className="profile-container">
          <div className="heading">
            <h1>Profile Setting</h1>
            <h3>Personal Details</h3>
          </div>

          <div className="profile-img">
            <img src={user.photoURL} alt="user-photo" />
          </div>
          <div className="profile-info">
            <div className="name">
              <h4>
                <span> Name:</span>
                {user && user.displayName ? (
                  user.displayName
                ) : (
                  <span>Not Provided</span>
                )}
              </h4>
            </div>
            <div className="email">
              <h4>
                <span> Email:</span> {user && user.email}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
