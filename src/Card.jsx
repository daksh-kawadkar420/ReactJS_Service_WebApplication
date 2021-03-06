/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { NavLink } from "react-router-dom";
import crd1 from "./logo192.png";

const Card = (props) => {
  return (
    <>
      <div className="col-10 col-md-4 col-sm-6 mx-auto">
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top cardImage"
            alt="card image"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
