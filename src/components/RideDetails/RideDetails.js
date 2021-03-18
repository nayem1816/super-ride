import React from "react";

const RideDetails = (props) => {
    const {RideName, RideImg} = props.allRideData;
  return (
    <div className="col-md-3">
      <div className="ride-option-style">
          <img className="img-fluid" src={RideImg} alt=""/>
          <h2>{RideName}</h2>
      </div>
    </div>
  );
};

export default RideDetails;
