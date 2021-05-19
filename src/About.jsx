import React from "react";
import Commoncomp from "./Commoncomp";

const About = () => {
  return (
    <>
      <Commoncomp
        name="Welcome to about page"
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};

export default About;
