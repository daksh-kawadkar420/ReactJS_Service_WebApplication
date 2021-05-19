/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import homeImg from "./logo512.png";

const Commoncomp = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 skill order-lg-1 d-flex flex-column justify-content-center">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Tech Training</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developers of every field.
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      to={props.visit}
                      className="btn btn-outline-primary"
                    >
                      {props.btnName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={homeImg}
                    className="image-fluid spin"
                    alt="Commoncomp image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commoncomp;
