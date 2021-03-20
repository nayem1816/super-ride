import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Destination.css";
import mapImg from "../../images/Map.png";
import ridesData from "../../RideData/RideData.json";
import TicketPart from "../TicketPart/TicketPart";
import GoogleMap from "../GoogleMap/GoogleMap";

const Destination = () => {
  const { idData } = useParams();

  return (
    <div className="mt-5 container">
      <div className="row destination-part d-flex justify-content-center">
        <div className="col-md-4 destination-ticket mb-5">
          {/* <h2 className="text-center mb-5">Ticket Price</h2> */}
          {idData ? <TicketPart dataId={idData}></TicketPart> : <div></div>}
        </div>
        <div className="col-md-7">
          <GoogleMap></GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default Destination;
