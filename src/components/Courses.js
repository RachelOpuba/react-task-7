import React from "react";
import { Link } from "react-router-dom";
import Data from "../db.json";
import Dashboard from "./Sidebar";

const Courses = () => {
  return (
    <>
      <div className="courses-wraper">
        {/* <h1 className="explore">Explore Courses</h1> */}
        {Data.map(function (info) {
          return (
            <div className="card-wraper">
              <Link to={`/cards/${info.id}`}>
                <div className="card chem" key={info.id}>
                  <h2>{info.name}</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Courses;
