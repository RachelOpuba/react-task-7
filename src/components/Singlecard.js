import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Data from "../db.json";

const Singlecard = () => {
  const { id } = useParams();
  return (
    <>
      <div className="single-card-wraper">
        <div className="single">
          {Data.filter((info) => info.id == id).map((card, index) => (
            <div className="single-card" key={index}>
              <h1>{card.name}</h1>
              <div className="intro">
                <h2> Introduction To {card.name}</h2>
                <p>{card.details.intro}</p>
              </div>
              <div className="branches">
                <h3>Branches of {card.name}</h3>
                {card.details.branches.map((branch, index) => (
                  <ul key={index}>
                    <li>{branch}</li>
                  </ul>
                ))}
              </div>
              <div className="back">
                <Link to="/sidebar/courses">
                  <button className="back-btn">Back</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Singlecard;
