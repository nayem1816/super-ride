import React from "react";
import iconCapacity from "../../images/peopleicon.png";
import "./TicketPart.css";
import ridesData from '../../RideData/RideData.json';

const TicketPart = (props) => {
    const dataId = props.dataId
    const newRideData = ridesData.find(data => data.id == dataId)
    console.log(newRideData);
    const {RideImg, RideName, capacity, ticketPrice} = newRideData;
  return (
    <div className="ticket-part">
      <div className="d-flex align-items-center ticket-part-items justify-content-between">
        <div className="">
          <img className="ride-img" src={RideImg} alt="" />
        </div>
        <div className="">
          <h5>{RideName}</h5>
        </div>
        <div className="d-flex align-items-center">
          <img className="icon-capacity" src={iconCapacity} alt="" />
          <h5>{capacity}</h5>
        </div>
        <div className="">
          <h5>{ticketPrice}$</h5>
        </div>
      </div>
      <div className="d-flex align-items-center ticket-part-items justify-content-between">
        <div className="">
          <img className="ride-img" src={RideImg} alt="" />
        </div>
        <div className="">
          <h5>{RideName}</h5>
        </div>
        <div className="d-flex align-items-center">
          <img className="icon-capacity" src={iconCapacity} alt="" />
          <h5>{capacity}</h5>
        </div>
        <div className="">
          <h5>{ticketPrice}$</h5>
        </div>
      </div>
      <div className="d-flex align-items-center ticket-part-items justify-content-between">
        <div className="">
          <img className="ride-img" src={RideImg} alt="" />
        </div>
        <div className="">
          <h5>{RideName}</h5>
        </div>
        <div className="d-flex align-items-center">
          <img className="icon-capacity" src={iconCapacity} alt="" />
          <h5>{capacity}</h5>
        </div>
        <div className="">
          <h5>{ticketPrice}$</h5>
        </div>
      </div>
      <div className="d-flex align-items-center ticket-part-items justify-content-between">
        <div className="">
          <img className="ride-img" src={RideImg} alt="" />
        </div>
        <div className="">
          <h5>{RideName}</h5>
        </div>
        <div className="d-flex align-items-center">
          <img className="icon-capacity" src={iconCapacity} alt="" />
          <h5>{capacity}</h5>
        </div>
        <div className="">
          <h5>{ticketPrice}$</h5>
        </div>
      </div>
    </div>
  );
};

export default TicketPart;