import React from "react";
import { Link } from "react-router-dom";
import "./RideDetails.css";

const RideDetails = (props) => {
  const { id, RideName, RideImg } = props.allRideData;
  return (
    <div className="col-md-6 col-lg-3 d-flex justify-content-center ride-option-style mb-3 mt-5">
      <Link to={`/destination/${id}`} className="card p-3 card-style">
        <img className="img-fluid card-img-top p-2" src={RideImg} alt="" />
        <div className="card-body">
          <h2 className="card-text">{RideName}</h2>
        </div>
      </Link>
    </div>
  );
};

export default RideDetails;
