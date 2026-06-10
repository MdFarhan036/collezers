import React, { useState, useEffect } from "react";
// import Tabs from "./Tabs";
import "./ExplorePrograms.css";
import Sdata2 from "../Data/SData2";
import Sdata1 from "../Data/SData";
import Sdata3 from "../Data/SData3";
import Sdata4 from "../Data/SData4";
import { Courseug } from "./Courseug";
import { Link } from 'react-router-dom';

import { Coursepg } from "./Coursepg";
import { Coursediploma } from "./Coursediploma";
import { Coursecertification } from "./Coursecertification";
import { EnquiryModal } from "../Common/EnquiryModal";
// import tabData from './CoursesData'
export const ExplorePrograms = () => {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  // const [bachelors, setBachelors] = useState(Sdata1);
  const [masters, setMasters] = useState(Sdata2);
  const [diploma, setDiploma] = useState(Sdata3);
  const [cetification, setCetification] = useState(Sdata4);

  return (
    <div className="programs-container">
      <h1 className="courses-title">Discover What We can Offer!</h1>
      <div
        className="explore-programs"

      >
        <div className="program-tabs ">
          <div
            onClick={() => toggleTab(1)}
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          >
            UG Courses
          </div>
          <div
            onClick={() => toggleTab(2)}
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          >
            PG Courses
          </div>
          <div
            onClick={() => toggleTab(3)}
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          >
            Diploma Courses
          </div>
          <div
            onClick={() => toggleTab(4)}
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          >
            Certificate Courses
          </div>
        </div>
        <div className="program-content">
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          ><ul>
              {Sdata1.bachelors.map((item1) => {
                return <Courseug key={item1.id} item={item1} />

              })}
            </ul>
          </div>
          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            {masters.map((item2) => {
              return <Coursepg key={item2.id} item={item2} />;
            })}
          </div>
          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            {diploma.map((item3) => {
              return <Coursediploma key={item3.id} item={item3} />;
            })}
          </div>
          <div
            className={toggleState === 4 ? "content active-content" : "content"}
          >
            {cetification.map((item4) => {
              return <Coursecertification key={item4.id} item={item4} />;
            })}
          </div>
          {/* <Tabs tabs={tabData} /> */}
        </div>
      </div>


    </div>
  );
};
