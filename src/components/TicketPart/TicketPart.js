import React from "react";
import iconCapacity from "../../images/peopleicon.png";
import "./TicketPart.css";
import ridesData from "../../RideData/RideData.json";
import { userContext } from "../../App";
import { useContext } from "react";
import { dataContext } from "../Home/Home";

const TicketPart = (props) => {
  const dataId = props.dataId;
  const getValue = props.getValue;
  console.log(getValue);
  // const newRideData = ridesData.find(data => data.id === dataId)
  const newRideData = ridesData[dataId - 1];
  const { RideImg, RideName, capacity, ticketPrice } = newRideData;
  return (
    <div className="ticket-part">
      <div className="location-area">
          <h3 className="mb-5 ml-3 text-light">Mirpur-1</h3>
          <h3 className="ml-3 text-light">Uttara</h3>
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
