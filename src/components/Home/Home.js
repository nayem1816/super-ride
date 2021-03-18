import React from "react";
import bgImg from "../../images/Bg.png";
import Header from "../Header/Header";
import "./Home.css";
import ridesData from "../../RideData/RideData.json";
import { useEffect } from "react";
import { useState } from "react";
import RideDetails from "../RideDetails/RideDetails";

const Home = () => {
  const [rideData, setRideData] = useState([]);
  useEffect(() => {
    setRideData(ridesData);
  }, []);
  return (
    <div className="home-style" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="">
        <Header></Header>
      </div>
      <div className="container">
        <div className="row d-flex align-items-center">
          {rideData.map((allRideData) => (
            <RideDetails
              allRideData={allRideData}
              key={allRideData.id}
            ></RideDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
