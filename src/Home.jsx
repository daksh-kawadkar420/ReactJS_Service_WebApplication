/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import homeImg from "./logo512.png";
import Commoncomp from "./Commoncomp";

const Home = () => {
  return (
    <>
      <Commoncomp
        name="Learn new skills with"
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
};

export default Home;
