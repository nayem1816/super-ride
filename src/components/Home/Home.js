import React, { createContext } from "react";
import bgImg from "../../images/Bg.png";
import "./Home.css";
import ridesData from "../../RideData/RideData.json";
import { useEffect } from "react";
import { useState } from "react";
import RideDetails from "../RideDetails/RideDetails";
import { Route, Router, Switch } from "react-router";
import Search from "../Search/Search";

export const dataContext = createContext();

const Home = () => {
  const [inputData, setInputData] = useState({});
  const [rideData, setRideData] = useState([]);
  useEffect(() => {
    setRideData(ridesData);
  }, []);
  return (
    <dataContext.Provider value={[inputData, setInputData]}>
      <div className="home-style" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="container ride-details">
          <div className="row d-flex align-items-center card-body-style">
            {rideData.map((allRideData) => (
              <RideDetails
                allRideData={allRideData}
                key={allRideData.id}
              ></RideDetails>
            ))}
          </div>
        </div>
      </div>
    </dataContext.Provider>
  );
};

export default Home;
