import React, { useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import mapImg from "../../images/Map.png";
import "./Search.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import GoogleMap from "../GoogleMap/GoogleMap";
import { dataContext } from "../Home/Home";

const Search = () => {
  const { dataId } = useParams();
  const [pickData, setPickData] = useState({
    from: "",
    to: "",
  });
  const handelGetData = (e) => {
    if (e.target.name === "from") {
      const newPickData = { ...pickData };
      const pickForm = e.target.value;
      newPickData.from = pickForm;
      setPickData(newPickData);
      const newData = { from: pickForm };
      console.log(newData);
    }
    if (e.target.name === "to") {
      const newPickData = { ...pickData };
      const pickTo = e.target.value;
      newPickData.to = pickTo;
      setPickData(newPickData);
      const newData = { to: pickTo };
      console.log(newData);
    }
  };

  return (
    <div>
      <div className="mt-5 container">
        <div className="row destination-part d-flex justify-content-center">
          <div className="col-md-4 destination-ticket mb-5">
            <form className="full-search-form">
              <p className="mt-2">Pick From</p>
              <input
                className="from-style"
                name="from" defaultValue="Mirpur-1"
              />
              <br />
              <p className="mt-4">Pick To</p>
              <input
                className="to-style"
                name="to" defaultValue="Uttara"
              />
              <br />
              <Link to={`/destination/${dataId}`}>
                <input 
                  className="btn search-btn mt-4"
                  type="Submit"
                  value="Search"
                />
              </Link>
            </form>
          </div>
          <div className="col-md-7">
            <GoogleMap></GoogleMap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
