import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <nav>
          <div>
            <h2>Genieus-Minds</h2>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </nav>
        <div className="home-wraper">
          <div className="home-container">
            <div className="home-text">
              <h2>Learn on your class schedule</h2>
              <h2></h2>
              <p>
                Learn and aquire skills across business, tech, design and more.
                Taught by experts to help your caree workforce on whatever
                career path.
              </p>
            </div>
            <div className="student">
              <img src={process.env.PUBLIC_URL + "/images/student-1.jpg"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
