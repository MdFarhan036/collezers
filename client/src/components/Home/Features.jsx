import React, { useState } from "react";
import { FeatureCard } from "./FeatureCard";
import { Featuredata } from "../Data/SData";

export const Features = () => {
  const [featureitem, setFeatureitem] = useState(Featuredata);

  return (
    <div className="container">
      <section className="section-category" aria-label="category">
        <h2 className="feature-title">What We Do!</h2>

        <p className="feature-subtitle">#Elevating Online Education</p>

        <div className="grid-list">
          {featureitem.map((item) => {
            return <FeatureCard key={item.id} item={item} />;
          })}
        </div>
      </section>
    </div>
  );
};
