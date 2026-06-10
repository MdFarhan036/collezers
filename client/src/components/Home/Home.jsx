import React from "react";
import Carousel from "./Carousel";
import "./Home.css";
import { ExplorePrograms } from "../Programs/ExplorePrograms";
import { Team } from "./Team";

import { Testimonial } from "./Testimonial";
import { Features } from "./Features";
import { Partners } from "../../PartnersPage/Partners";
// import { ComparePage } from "../ComparePage/ComparisonPage";
import { Mentors } from "./Mentors";
import Specialization from "./Specialization";

export const Home = () => {
  return (
    <>
      <Carousel />
      <ExplorePrograms />
      <Features />
      <Mentors />
      {/* <Team /> */}
      {/* <Course /> */}
      {/* <ComparePage /> */}
      {/* <Specialization /> */}
      <Partners />
      <Testimonial />
      
      {/* {model} */}
    </>
  );
};
